# Windows 下使用 MSVC 编译 CMake 项目

[[TOC]]

## 1. 编译和构建

下面使用常见的 CMake 配置和构建命令。

配置项目到 `./build/` 文件夹下，使用 Visual Studio 2019 生成器，使用 `x64` 构建工具，使用 `x64` 构建平台。

```bash
cmake -B ./build -G "Visual Studio 16 2019" -T host=x64 -A x64 .
```

构建项目，使用 `Release` 配置，使用 `ALL_BUILD` 目标，使用 4 个线程。

```bash
cmake --build ./build --config Release --target ALL_BUILD -j 4 --
```

## 2. 常见问题

### 2.1 设置编译器的默认编码为 UTF-8

下面在 `CMakeLists.txt` 文件指定编译器的默认编码为 UTF-8。

其中 `/utf-8` 标志和 `/source-charset:utf-8 /execution-charset:utf-8` 标志的作用是一样的[^1]。如果想了解更多 `/utf-8` 标志请阅读 [参考文献](https://learn.microsoft.com/zh-cn/cpp/build/reference/utf-8-set-source-and-executable-character-sets-to-utf-8)。

[^1]: 将源字符集和执行字符集设置为 UTF-8，learn.microsoft.com，<https://learn.microsoft.com/zh-cn/cpp/build/reference/utf-8-set-source-and-executable-character-sets-to-utf-8>

你可以使用下面的任意一组代码：

```cmake
if(MSVC)
    add_compile_options(/utf-8)
endif()
```
```cmake
if(MSVC)
    add_compile_options(/source-charset:utf-8)
    add_compile_options(/execution-charset:utf-8)
endif()
```
```cmake
add_compile_options("$<$<CXX_COMPILER_ID:MSVC>:/utf-8>")
```
```cmake
add_compile_options("$<$<CXX_COMPILER_ID:MSVC>:/source-charset:utf-8>")
add_compile_options("$<$<CXX_COMPILER_ID:MSVC>:/execution-charset:utf-8>")
```
