    <script>
        async function gerarPDF() {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF();

            // Obtém os valores do formulário
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem").value;

            // Adiciona texto ao PDF
            pdf.text("Formulário de Contato", 10, 10);
            pdf.text(`Nome: ${nome}`, 10, 20);
            pdf.text(`E-mail: ${email}`, 10, 30);
            pdf.text("Mensagem:", 10, 40);
            pdf.text(mensagem, 10, 50);

            // Salva o PDF
            pdf.save("formulario.pdf");
        }
        const elemento = document.getElementById('elemento');
if (elemento) {
    elemento.classList.add('nova-classe');
}

    </script>
