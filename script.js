<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Code Editor</title>
</head>
<body>
  <textarea id="code" rows="10" cols="50">
    // Enter your code here
  </textarea>
  <button onclick="runCode()">Run Code</button>
  <script>
    function runCode() {
      var code = document.getElementById("code").value;
      eval(code);
    }
  </script>
</body>
</html>
