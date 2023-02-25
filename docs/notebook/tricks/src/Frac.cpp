#include <iostream>

// 定义简易的错误类型
const char* const ZeroError = "DevidedByZeroError";

// 最大公约数快速异或算法
inline int gcd(int a, int b) {
    while (b ^= a ^= b ^= a %= b)
        ;
    return a;
}

// 有理数类
class Frac {
    int m_p, m_q;
    // 输入和输出定义为友元
    friend std::ostream& operator<<(std::ostream& stream, const Frac& frac);
    friend std::istream& operator>>(std::istream& stream, Frac& frac);

   public:
    Frac(int p, int q)
        : m_p(p), m_q(q) {
        // 如果分母为零报错
        if (m_q == 0)
            throw ZeroError;
        int gcdVal = gcd(m_p, m_q);
        // 此处约分
        if (gcdVal != 1 && gcdVal != -1) {
            m_p = m_p / gcdVal;
            m_q = m_q / gcdVal;
        }
        // 由最简定义得，分母不为负数
        if (m_q < 0) {
            m_p = -m_p;
            m_q = -m_q;
        }
    }
    ~Frac() {}
    // 实现加减乘除
    const Frac operator+(const Frac& frac) const;
    const Frac operator-(const Frac& frac) const;
    const Frac operator*(const Frac& frac) const;
    const Frac operator/(const Frac& frac) const;
    // 获取分子
    int getNumerator() {
        return m_p;
    }
    // 获取分母
    int getDenominator() {
        return m_q;
    }
};

// 加法实现
const Frac Frac::operator+(const Frac& frac) const {
    return Frac(frac.m_p * m_q + m_p * frac.m_q, frac.m_q * m_q);
}

// 减法实现
const Frac Frac::operator-(const Frac& frac) const {
    return Frac(m_p * frac.m_q - m_q * frac.m_p, frac.m_q * m_q);
}

// 乘法实现
const Frac Frac::operator*(const Frac& frac) const {
    return Frac(m_p * frac.m_p, m_q * frac.m_q);
}

// 除法实现
const Frac Frac::operator/(const Frac& frac) const {
    return Frac(m_p * frac.m_q, m_q * frac.m_p);
}

// 输出实现
std::ostream& operator<<(std::ostream& stream, const Frac& frac) {
    stream << "F(" << frac.m_p << " / " << frac.m_q << ")";
    return stream;
}

// 输入实现
std::istream& operator>>(std::istream& stream, Frac& frac) {
    // 通过构造函数化简
    int p, q;
    stream >> p;
    stream >> q;
    // 构造一个新的临时对象以便约分、化简
    Frac temp = Frac(p, q);
    frac.m_p = temp.m_p;
    frac.m_q = temp.m_q;
    return stream;
}

int main() {
    Frac* fra1 = new Frac(2, 3);
    Frac* fra2 = new Frac(2, 8);
    std::cout << (*fra1 + *fra2) << std::endl;
    std::cout << (*fra1 - *fra2) << std::endl;
    std::cout << (*fra1 * *fra2) << std::endl;
    std::cout << (*fra1 / *fra2) << std::endl;
    std::cout << fra2->getDenominator() << std::endl;
    std::cout << fra2->getNumerator() << std::endl;
    Frac fra3(1, 2);
    std::cin >> fra3;
    std::cout << fra3 << std::endl;
    delete fra1;
    delete fra2;
    return 0;
}
