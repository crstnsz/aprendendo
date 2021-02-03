#include <iostream>
#include <list> 
#include <numeric>

using namespace std;

int main()
{
    list<int> inteiros;

    for(int i = 0; i < 11; i++)
    {
        inteiros.push_back(i);
    }

    cout << "No braço" << endl;

    int total = 0;
    list<int>::iterator it;
    for(it = inteiros.begin(); it!=inteiros.end();it++)
    {
        total += *it;
    }

    cout << total << endl;

    cout << "Automatica" << endl;

    int totalAuto = accumulate(inteiros.begin(), inteiros.end(), 0);

    cout << totalAuto << endl;

}