# C++ 特殊字符标记

[[TOC]]

## 1. Unicode 字符

C++ 11 在 Unicode 方面的支持：

```cpp
// utf-8
char u8_array[] = u8"你好，世界";
std::string u8_str = u8"你好，世界";

// utf-16
char16_t u16_c = u'中';
char16_t u16_array[] = u"你好，世界";
std::u16string u16_str = u"你好，世界";

// ucs4
char32_t u32_c = U'𪚥';
char32_t u32_array[] = U"你好，世界";
std::u32string u32_str = U"你好，世界";
```

## 2. 宽字符

字符串前加上 `L`，则是不管编码环境是什么，都是将其后面的字符串都将以 Unicode 方式保存，相当于宽字符。

```cpp
wchar_t s[] = L"123abc";
```

宽字符串不能直接输出，可以使用 `std::wcout` 进行输出。在 Windows 建议使用宽字符操作路径等信息，避免乱码。

## 3. 自然字符串

`R"( ... )"` 会完全保留其中的内容，不进行转义。

```cpp
std::string json = R"(
{
    "error": {
        "code": 101,
        "message": "operation failed!"
    },
    "result": false
}
)";
```

原始字符串的定义形式为：`R"xxx(raw_string_text)xxx"`，其中括号的前后可以加任意其它相同的字符，所加的字符串会被编译器忽略。

## 4. 宏标记 `#` / `#@` / `##`

::: tip 多行的宏

使用 `\` 可以定义多行宏。

:::

### 4.1 字符串化：`#`

一个 `#` 代表字符串化，将所标记的内容转换为字面字符串，例如

```cpp
#define S(x) #x
```

下面的代码输出 `"你好"`：

```cpp
#include <iostream>
#define S(x) #x

int main() {
    std::cout << S(你好) << std::endl;
    return 0;
}
```

### 4.2 字符化：`#@`

`#@` 表示字符化，即用单引号包括：

```cpp
#include <iostream>
#define S(x) #@x

int main() {
    const char a = S(A);
    std::cout << a << std::endl;
    return 0;
}
```

### 4.3 连接：`##`

两个 `##` 代表连接，例如：

```cpp
#define S(x) ab##x
```

下面的代码可以输出 `1`：

```cpp
#include <iostream>
#define S(x) ab##x

int main() {
    int abc = 1;
    std::cout << S(c) << std::endl;
    // "1"
    return 0;
}
```

一个综合示例：

```cpp
#include <iostream>
#define S(x) L##x
#define OUTPUT(x) std::wcout << #x << ": " << (x) << std::endl;

int main() {
    wchar_t s[] = S("123abc");
    OUTPUT(s)
    // "s: 123abc"
    return 0;
}
```
