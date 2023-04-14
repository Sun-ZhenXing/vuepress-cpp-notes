# GLSL 快速入门

官方文档：<https://registry.khronos.org/OpenGL-Refpages/gl4/>

## Hello World

```glsl
#version 450

void myFunction(in float inputValue, out int outputValue, inout float inAndOutValue) {
  inputValue = 0.0;
  outputValue = int(inAndOutValue + inputValue);
  inAndOutValue = 3.0;
}

void main() {
  float in1 = 10.5;
  int out1 = 5;
  float out2 = 10.0;
  myFunction(in1, out1, out2);
}
```

## 语言特征

- 类 C 语言，语法类似 C++
    - 末尾有分号 `;`
    - 以 `main()` 函数为主函数
    - 注释 `// ...` 和 `/* ... */`
- 基本数据类型
    - 浮点型 `float`
    - 整型 `int`
    - 布尔型 `true` / `false`
    - 没有自动类型转换，类型必须匹配

变量不能是关键字和保留字，不能以 `gl_` 等开头。

GLSL 是强类型的语言，且赋值时变量的数据类型也要一致。

### 向量

GLSL 支持 2、3、4 维向量，根据分量的数据类型，我们还可以将多个向量合在一起：

```glsl
vec3 v1 = vec3(1.0, 0.0, 0.5);
vec2 v2 = vec2(v1);
vec4 v3 = vec4(1.0);

vec4 v4b = vec4(v2, v3);
// (1.0, 0.0, 1.0, 1.0)
```

向量默认都是 `float` 类型的。

### 向量分量的访问方式

通过分量属性访问：

```glsl
v4.x, v4.y, v4.z, v4.w  // 齐次坐标
v4.r, v4.g, v4.b, v4.a  // 色值
v4.s, v4.t, v4.p, v4.q  // 纹理坐标
```

将分量的多个属性连在一起，可以获取多个向量：

```glsl
vec4 v4 = vec4(1.0, 2.0, 3.0, 4.0);
v4.xy   // (1.0, 2.0)
v4.yx   // (2.0, 1.0)
v4.xw   // (1.0, 4.0)
```

通过分量索引访问：

```glsl
v4[0], v4[1], v4[2], v4[3]
```

用上面的方法访问到向量后，也可以用 `=` 号为向量赋值。

向量初始化时可以使用整数，但运算时一定要使用浮点数，否则会报错。

### 矩阵

GLSL 支持 2、3、4 维矩阵 `mat2`、`mat3`、`mat4`，矩阵中的元素都是浮点型。

GLSL 中的矩阵是列主序的，在建立矩阵的时候，其参数结构有很多种。

```glsl
vec4 v4_1 = vec4(1, 2, 3, 4);
vec4 v4_2 = vec4(5, 6, 7, 8);
vec4 v4_3 = vec4(9, 10, 11, 12);
vec4 v4_4 = vec4(13, 14, 15, 16);
mat4 m = mat4(v4_1, v4_2, v4_3, v4_4);
```

浮点+向量：

```glsl
vec4 v4_1 = vec4(1, 5, 9, 13);
vec4 v4_2 = vec4(2, 6, 10, 14);
mat4 m = mat4(v4_1, v4_2, 3, 7, 11, 15, 4, 8, 12, 16);
/*
    1, 5, 9, 13,
    2, 6, 10, 14,
    3, 7, 11, 15,
    4, 8, 12, 16
*/
```

单个浮点数

```glsl
mat4 m = mat4(1);
/*
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
*/
```

注：如矩阵中的参数数量大于 1，小于矩阵元素数量，会报错：

```glsl
// 错误
mat4 m4 = mat4(1.0, 2.0);
```

注意：矩阵和向量的索引下标只能是常数或者字面值，不能是其他变量。

部分 GLSL 支持逻辑异或 `^^` 。

## 向量与矩阵的运算

### 向量与向量的运算

```glsl
distance(p0, p1);   // 向量距离
dot(p0, p1);        // 点积
cross(p0, p1);      // 叉乘
```

### 向量与矩阵的运算

```glsl
mat4 m = mat4(
    1, 5, 9, 13,
    2, 6, 10, 14,
    3, 7, 11, 15,
    4, 8, 12, 16
);
vec4 v = vec4(1, 2, 3, 4);
```

由于 GLSL 是列主序的，故计算时相当于线性代数中的每个向量（或矩阵）的转置。

$$
M = \begin{bmatrix}
    1 & 2 & 3 & 4 \\
    5 & 6 & 7 & 8 \\
    9 & 10 & 11 & 12 \\
    13 & 14 & 15 & 16
\end{bmatrix},\,
v = \begin{bmatrix}
    1 \\ 2 \\ 3 \\ 4
\end{bmatrix}
$$

那么 `m * v` 的值为：

$$
Mv = \begin{bmatrix}
    1 & 2 & 3 & 4 \\
    5 & 6 & 7 & 8 \\
    9 & 10 & 11 & 12 \\
    13 & 14 & 15 & 16
\end{bmatrix}
\begin{bmatrix}
    1 \\ 2 \\ 3 \\ 4
\end{bmatrix} =
\begin{bmatrix}
    30 \\ 70 \\ 110 \\ 150
\end{bmatrix}
$$

那么 `v * m` 的值为：

$$
M^{ \mathsf{T} }v = \begin{bmatrix}
    1 & 5 & 9 & 13 \\
    2 & 6 & 10 & 14 \\
    3 & 7 & 11 & 15 \\
    4 & 8 & 12 & 16
\end{bmatrix}
\begin{bmatrix}
    1 \\ 2 \\ 3 \\ 4
\end{bmatrix} =
\begin{bmatrix}
    90 \\ 100 \\ 110 \\ 120
\end{bmatrix}
$$

### 矩阵与矩阵的运算

加、减、除都是相同位置的元素进行运算，矩阵乘法满足乘法规则：

```glsl
mat4 m = mat4(
    2, 16, 8, 8,
    4, 8, 8, 8,
    8, 4, 8, 8,
    16, 8, 8, 8
);
mat4 n = mat4(
    1, 4, 1, 2,
    2, 4, 2, 1,
    4, 4, 1, 2,
    8, 4, 2, 1
);
```

`m * n` 的结果为：

$$
\begin{bmatrix}
    2 & 4 & 8 & 16 \\
    16 & 8 & 4 & 8 \\
    8 & 8 & 8 & 8 \\
    8 & 8 & 8 & 8
\end{bmatrix}
\begin{bmatrix}
    1 & 2 & 4 & 8 \\
    4 & 4 & 4 & 4 \\
    1 & 2 & 1 & 2 \\
    2 & 1 & 2 & 1
\end{bmatrix} =
\begin{bmatrix}
    58 & 52 & 64 & 64 \\
    68 & 80 & 116 & 176 \\
    64 & 72 & 88 & 120 \\
    64 & 72 & 88 & 120
\end{bmatrix}
$$

计算结果即为：

```glsl
mat4(
    58, 68, 64, 64,
    52, 80, 72, 72,
    64, 116, 88, 88,
    64, 176, 120, 120
)
```

## 其他语法

### 结构体

```glsl
struct Light {
    vec4 color;
    vec3 pos;
};
```

GLSL 中的构造函数和 C++ 没有什么不同，唯一的区别就是构造函数传递的参数必须要全部使用，未用到的参数不要写到构造函数的参数列表中。

结构体默认有构造函数，其参数顺序和结构体中变量声明的顺序完全一致。

### 数组

GLSL 只支持一维数组，且长度只能是定值。

```glsl
vec4 vs[2];
vs[0] = vec4(1, 2, 3, 4);
vs[1] = vec4(5, 6, 7, 8);
```

### 控制流

支持 C/C++ 的 `if` / `for` / `break` / `continue`，此外还支持 `discard` 关键字，`discard` 直接终止这个着色器执行。

### 内置变量和函数

可参考官方文档。

- `abs()`
- `sin()`
- `cos()`
- `tan()`
- `atan()`
- ...

### 精度限定

```glsl
mediump float size;
highp vec4 position;
lowp vec4 color;

precision mediump float;
precision highp int;
```

## 基础类型

|           类型            | 说明                          |
| :-----------------------: | ----------------------------- |
|          `void`           | 空类型值                      |
|          `bool`           | 布尔类型 `true` 或 `false`    |
|           `int`           | 带符号的整数                  |
|          `float`          | 带符号的浮点数，标量          |
|  `vec2`, `vec3`, `vec4`   | 2、3、4 维浮点数向量          |
| `bvec2`, `bvec3`, `bvec4` | 2、3、4 维布尔向量            |
| `ivec2`, `ivec3`, `ivec4` | 2、3、4 维整数向量            |
|  `mat2`, `mat3`, `mat4`   | 2x2、3x3、4x4 浮点数矩阵      |
|        `sampler2D`        | 2D 纹理（2D Texture）         |
|       `samplerCube`       | 盒纹理（Cube Mapped Texture） |

## 变量修饰符

|   修饰符    | 说明                                                                                                |
| :---------: | --------------------------------------------------------------------------------------------------- |
| `<default>` | （默认的）本地变量，可读可写                                                                        |
|   `const`   | 声明变量或函数的参数为只读类型                                                                      |
| `attribute` | 只能存在于 Vertex Shader 中，一般用于保存顶点或法线数据，它可以在数据缓冲区中读取数据               |
|  `uniform`  | 在运行时 Shader 无法改变 `uniform` 变量，一般用来放置程序传递给 Shader 的变换矩阵、材质、光照参数等 |
|  `varying`  | 主要负责在 Vertex 和 Fragment 之间传递变量                                                          |

## 函数参数修饰符

| 修饰符  | 说明                                 |
| :-----: | ------------------------------------ |
|  `in`   | （默认的）复制到函数中在函数中可读写 |
|  `out`  | 返回时从函数中复制出来               |
| `inout` | 复制到函数中并在返回时复制出来       |

## 宏指令

支持 C/C++ 预编译指令：

```glsl
// 定义
#define
#undef
#ifdef
#ifndef

// 条件指令
#if
#elif
#else
#endif

// 其他常见指令
#error
#pragma
#extension
#version
#line
```

## 参考

1. <https://github.com/wshxbqq/GLSL-Card>
2. <https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>
3. <https://juejin.cn/post/7067386426706362399>
