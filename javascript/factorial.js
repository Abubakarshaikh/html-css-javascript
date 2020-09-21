    <script>
        function factorial(f){
            if (f == 0){
                return 1
            }
            else {
                return f * factorial(f - 1)
            }
        }
        var r = factorial(7)
        document.write(r);
    </script>
