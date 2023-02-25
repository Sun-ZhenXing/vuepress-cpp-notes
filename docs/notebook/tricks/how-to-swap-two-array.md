---
title: C++ 如何使用 swap 交换数组
description: C++ 如何使用 swap 交换数组
---

# C++ 如何使用 swap 交换数组

[[TOC]]

## 1. C++ `std::swap`

::: tip 头文件

在 C++ 98 `std::swap` 被定义在 `<algorithm>` 中，而 C++ 11 则定义在 `<utility>` 中。

:::

之前在使用 `std::swap` 交换数组，但是 C++ 的数组变量是不能被重新定义的，那么 `std::swap` 是如何交换这两个数组的呢？

在 CPlusPlus 网站上，`std::swap` 的声明如下：[^1]

[^1]: `swap`，cplusplus.com，<https://cplusplus.com/reference/algorithm/swap/>

::: code-tabs#cpp

@tab C++ 98

```cpp
// C++ 98 in <algorithm>
template <class T> void swap (T& a, T& b);
```

@tab C++ 11

```cpp
// C++ 11 in <utility>
template <class T> void swap (T& a, T& b) noexcept (is_nothrow_move_constructible<T>::value && is_nothrow_move_assignable<T>::value);

template <class T, size_t N> void swap(T (&a)[N], T (&b)[N]) noexcept (noexcept(swap(*a, *b)));
```

:::

其等价实现如下：

::: code-tabs#cpp

@tab C++ 98

```cpp
template <class T> void swap(T& a, T& b) {
  T c(a);
  a = b;
  b = c;
}
```

@tab C++ 11

```cpp
template <class T> void swap(T& a, T& b) {
  T c(std::move(a));
  a = std::move(b);
  b = std::move(c);
}
template <class T, size_t N> void swap(T &a[N], T &b[N]) {
  for (size_t i = 0; i < N; ++i)
    swap(a[i], b[i]);
}
```

:::

## 2. 一些思考

也就是说，C++ 11 后的 `std::swap` 交换数组实际上是在交换每一个元素，而不改变数组的指针。而且数组长度必须一致，这是符合 C++ 规范的，因为在运行状态下改变数组的指针将改变数组的属性，编译器无法确定数组的状态。

::: info 结论

最好不要对数组变量进行任何操作，复制和交换数组也是一个低效操作，也避免使用 `std::swap` 交换数组。

:::

为了交换数组，可以使用两个指针保存数组的位置，然后直接使用指针来代表数组。

```cpp
int a[100], b[100];

int main() {
    int* a1 = a;
    int* b1 = b;
    swap(a1, b1);
    // 下面直接使用 a1[i]，b1[i]
}
```
