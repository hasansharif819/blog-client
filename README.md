# Blog
# https://blog-88364.web.app

## server code
## https://github.com/hasansharif819/blog-server

##solving Problem https://docs.google.com/document/d/1KNsJsnGD1DR70-bNQXh2unPs-Q10GJ_v-QIpw54RNhs/edit?usp=sharing

## Problem 1

<?php
$N=5;
for($i=1; $i<=$N; $i++){
    for($j=$N; $j>=1; $j--){
        if($j<=$i){
            echo "*";
        }
        else{
            echo ' ';
        }
    }
    echo "</br>";
}
?>

## Problem 2
<?php
 $a = 5;
 $b = 10;
 $a = $a+$b;
 $b = $a - $b;
 $a = $a - $b;
 echo "a = ", $a, "</br>";
 echo "b = ", $b, "</br>";
?>

