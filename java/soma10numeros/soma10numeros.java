import java.util.stream.IntStream;
import java.util.stream.*; 
import java.util.List;

class Soma10Numeros {
    public static void main(String[] args){
        List<Integer> lista = IntStream.iterate(1, i -> i < 11, i -> i + 1)
            .boxed()
            .collect(Collectors.toList());
        
        var total = 0;

        for(Integer item : lista){
           total += item;
        }
        
        System.out.println("Na mão " + total);

        Integer automatico =  lista
            .stream()
            .reduce(0, (subtotal, element) -> subtotal + element);

        System.out.println("Automático " + automatico);

    }
}