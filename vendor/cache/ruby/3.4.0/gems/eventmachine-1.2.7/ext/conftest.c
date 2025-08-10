#include "ruby.h"

#include <winsock2.h>
#include <windows.h>
#include <unistd.h>

/*top*/
extern int t(void);
int main(int argc, char **argv)
{
  if (argc > 1000000) {
    int (* volatile tp)(void)=(int (*)(void))&t;
    printf("%d", (*tp)());
  }

  return !!argv[argc];
}
extern void pipe2();
int t(void) { pipe2(); return 0; }
