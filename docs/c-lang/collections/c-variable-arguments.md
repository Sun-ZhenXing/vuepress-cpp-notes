# C 语言可变参数

[[TOC]]

## 1. 使用方法

1. 定义一个函数，最后一个参数为省略号，省略号前面可以设置自定义参数
2. 在函数定义中创建一个 `va_list` 类型变量
3. 使用可变参数前面的一个参数和 `va_start` 宏来初始化 `va_list` 变量为一个参数列表
4. 使用 `va_arg` 宏和 `va_list` 变量来访问参数列表中的每个项
5. 使用宏 `va_end` 来清理赋予 `va_list` 变量的内存

示例代码：

```c
#include <stdio.h>
#include <stdarg.h>

double average(int num, ...) {
    va_list valist;
    double sum = 0.0;
    int i;
    /* 为 num 个参数初始化 valist */
    va_start(valist, num);
    /* 访问所有赋给 valist 的参数 */
    for (i = 0; i < num; i++) {
        sum += va_arg(valist, int);
    }
    /* 清理为 valist 保留的内存 */
    va_end(valist);
    return sum / num;
}

int main() {
    printf("%f\n", average(4, 2, 3, 4, 5));
    printf("%f\n", average(3, 5, 10, 15));
}
```

如这样的输入输出语句都包含了可变参数：

```c
int printf(const char* format, ...)
int scanf(const char *format, ...)
```

## 2. 缺省参数提升

注意，`va_arg(ap, type)` 宏中的 `type` 不能是
- `char`
- `short`
- `float`

否则将产生 **缺省参数提升**（Default Argument Promotions）
- `float` 类型的参数提升为 `double` 类型
- `char`、`short` 和相应的 `signed`、`unsigned` 类型参数提升为 `int` 类型
- 若 `int` 类型不能容纳原值，则提升为 `unsigned int` 类型

## 3. 参数个数判断

变参宏无法智能识别可变参数的数目和类型，因此实现变参函数时需自行判断可变参数的数目和类型。所以我们就要想一些办法，比如：

1. 显式提供变参数目或设定遍历结束条件
2. 显式提供变参类型枚举值，或在固定参数中包含足够的类型信息（如 `printf()` 函数通过分析 `format()` 字符串即可确定各变参类型）
3. 主调函数和被调函数可约定变参的数目和类型
