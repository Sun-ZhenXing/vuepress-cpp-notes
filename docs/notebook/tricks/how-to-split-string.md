# C++ 如何实现 split 字符串

下面提供了几种实现 `split(str)` 的不同方法。

[[TOC]]

## 1. C 标准库

C 的标准库 `<string.h>` 定义了 `strtok()` 函数，可以将字符串分割为多个字符串，其声明如下：

```c
char *strtok(char *str, const char *delim);
```

该函数返回被分解的第一个子字符串，如果没有可检索的字符串，则返回一个空指针。其原理是将字符串的目标位置字符更改为 `'\0'`。

参数含义：
- `str`：要被分解成一组小字符串的字符串
- `delim`：包含分隔符的 C 字符串

## 2. 双指针

直接分割字符串，最简单的方式：

```cpp
vector<string> split(const string& str, const string& delim) {
    string::size_type slow = 0, fast = str.find(delim);
    vector<string> res;
    while (fast != string::npos) {
        res.push_back(str.substr(slow, fast - slow));
        slow = fast + delim.size();
        fast = str.find(delim, slow);
    }
    if (slow != str.size())
        res.push_back(str.substr(slow));
    return res;
}
```

## 3. stringstream

使用 `istringstream` 方法创建分割字符串方法，但分割对应目标只能是字符。

```cpp
vector<string> split(const string& s, char delimiter) {
    vector<string> tokens;
    string token;
    istringstream tokenStream(s);
    while (getline(tokenStream, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}
```

## 4. boost

Boost 库提供了 `boost::split` 方法，其声明如下：

```cpp
#include <boost/algorithm/string.hpp>

boost::split(
    results,
    text,
    [](char c){ return c == ' '; }
);
```

## 参考

1. <https://www.fluentcpp.com/2017/04/21/how-to-split-a-string-in-c/>
2. <https://www.cnblogs.com/dfcao/p/cpp-FAQ-split.html>
3. <https://www.oreilly.com/library/view/c-cookbook/0596007612/ch04s07.html>
