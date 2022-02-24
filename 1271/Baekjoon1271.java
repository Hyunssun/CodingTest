import java.math.BigInteger;
import java.util.*;

public class Baekjoon1271 {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        BigInteger n = scanner.nextBigInteger();
        BigInteger m = scanner.nextBigInteger();
        System.out.println(n.divide(m));
        System.out.println(n.remainder(m));
    }
}