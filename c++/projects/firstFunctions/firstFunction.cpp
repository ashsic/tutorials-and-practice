#include <iostream>

void doPrint() {
  std::cout << "In doPrint()\n";
}

int main() {
  std::cout << "start main\n";
  doPrint();
  std::cout << "end main\n";

  return 0;
}
