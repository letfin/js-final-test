$(".rozbtn").on("click", function() {
    $(".panelCont").toggleClass("open");
});

// Зміна шрифту
$("#font").on("change", function() {
    $("#resultFrame").contents().find("body").css("font-family", $(this).val());
});

// Жирний текст
$("#boldBtn").on("click", function() {
    const frameBody = $("#resultFrame").contents().find("body");
    frameBody.css("font-weight", frameBody.css("font-weight") === "bold" ? "normal" : "bold");
});

// Виконання коду
$("#runBtn").on("click", function() {
    const htmlCode = $("#htmlCode").val();
    const cssCode = `<style>${$("#cssCode").val()}</style>`;
    const jsCode = `<script>${$("#jsCode").val()}<\/script>`;

    const resultFrame = document.getElementById("resultFrame").contentWindow.document;
    resultFrame.open();
    resultFrame.write(htmlCode + cssCode + jsCode);
    resultFrame.close();
});