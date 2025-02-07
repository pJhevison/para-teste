import javax.swing.JOptionPane;

public class MediaAluno {
    public static void main(String[] args) {
        // Solicita as notas ao usuário
        double nota1 = Double.parseDouble(JOptionPane.showInputDialog("Digite a primeira nota:"));
        double nota2 = Double.parseDouble(JOptionPane.showInputDialog("Digite a segunda nota:"));
        double nota3 = Double.parseDouble(JOptionPane.showInputDialog("Digite a terceira nota:"));

        // Calcula a média
        double media = (nota1 + nota2 + nota3) / 3;

        // Verifica se o aluno foi aprovado ou reprovado
        String resultado = (media >= 8) ? "Aprovado!" : "Reprovado!";
        
        // Exibe a média e o resultado
        JOptionPane.showMessageDialog(null, "Média: " + media + "\n" + resultado);
    }
}
