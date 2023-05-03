#if _WIN32
#include <fcntl.h>
#include <io.h>
#include <windows.h>

#include <iostream>

std::wstring s2ws(const std::string& s, int length = 1024) {
    wchar_t* wpath = new wchar_t[length];
    MultiByteToWideChar(CP_ACP, 0, s.c_str(), -1, wpath, length);
    std::wstring ws(wpath);
    delete[] wpath;
    return ws;
}

#else

#include <locale>
#include <codecvt>

std::wstring s2ws(const std::string& s) {
    std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
    return converter.from_bytes(s);
}

#endif

#include <iostream>
using namespace std;

int main(int argc, char* argv[]) {
#if _WIN32
    _setmode(_fileno(stdout), _O_U16TEXT);
    _setmode(_fileno(stdin), _O_U16TEXT);
#endif
    wcout << L"测试中文" << endl;
    wstring s;
    wcout << L"s = ";
    wcin >> s;
    wcout << L"s: " << s << endl;
    if (argc < 2) {
        wcout << L"Usage: " << s2ws(argv[0]) << L" <path>" << endl;
        return 0;
    }
    wcout << L"path: " << s2ws(argv[1]) << endl;
    wcout << L"测试 Unicode ✖️ ✔️" << endl;
    return 0;
}
