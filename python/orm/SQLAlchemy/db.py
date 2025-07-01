from sqlalchemy import create_engine, select

from sqlalchemy.orm import sessionmaker
import uuid
import urllib
import cProfile
from database import IAIndexingTasks3


usuario = "postgres"
senha = "DSxIU5tFMH2XA"
host = "localhost"
porta = "5432"
nome_do_banco = "docspideria"

# Codificar a senha
senha_codificada = urllib.parse.quote(senha)

# Criar a URL de conexão
db_url_1 = f"postgresql://{usuario}:{senha_codificada}@{host}:{porta}/{nome_do_banco}"

# Configuração do banco de dados
engine = create_engine(db_url_1)
# Criar uma sessão
Session = sessionmaker(bind=engine)
session = Session()


def insert_rows() -> None:
    for i in range(10000):
        new_record = IAIndexingTasks3(Id=str(uuid.uuid4()), Status=1, ErrorCode=i, Error='Error', Traceback='nothings')
        session.add(new_record)
    session.commit()


def insert_rows_transactional() -> None:
    for i in range(10):
        new_record = IAIndexingTasks3(Id=str(uuid.uuid4()), Status=1, ErrorCode=i, Error='Error', Traceback='transaction 1')
        session.add(new_record)

    session.commit()

    for i in range(10):
        new_record = IAIndexingTasks3(Id=str(uuid.uuid4()), Status=1, ErrorCode=i, Error='Error', Traceback='transaction 2')
        session.add(new_record)

def select_individual_rows() -> None:
    for i in range(10000):
        stmt = select(IAIndexingTasks3).where(IAIndexingTasks3.ErrorCode == i)
        result = session.execute(stmt).scalars()
        for d in result:
            print(f"{d.Id} {d.Status} {d.ErrorCode} {d.Error} {d.Traceback}")


def select_all_rows() -> None:
    result = session.query(IAIndexingTasks3).all()
    for d in result:
        print(f"{d.Id} {d.Status} {d.ErrorCode} {d.Error} {d.Traceback}")


def update_rows_without_pk() -> None:
    for i in range(10000):
        result = session.query(IAIndexingTasks3).filter_by(ErrorCode=i).first()
        result.Status = 3
        result.Error = 'change'
        result.Traceback = 'a lot of data'

        session.commit()

def delete_even() -> None:
    for i in range(0, 10000, 2):
        result = session.query(IAIndexingTasks3).filter(IAIndexingTasks3.ErrorCode == i)
        result.delete()
        session.commit()


# Função para ler todos os registros
def fetch_all_records():
    # Selecionar todos os registros
    records = session.query(IAIndexingTasks3).all()

    # Iterar pelos registros e imprimir
    for record in records:
        print(f"Id: {record.Id}")
        print(f"Status: {record.Status}")
        print(f"ErrorCode: {record.ErrorCode}")
        print(f"Error: {record.Error}")
        print(f"Traceback: {record.Traceback}")
        print("-" * 30)

if __name__ == "__main__":

    # Ler e exibir todos os registros
    cProfile.run('insert_rows_transactional()')

    # Fechar a sessão
    session.close()