<?php

if (isset($_POST['whatIWant']))
  askedWithPost($_POST);
else if (isset($_GET['whatIWant']))
  askedWithGet();
else
  echo "Why, dude? How?";




function askedForJSON($json) {

}
function askedWithPost($request) {
  $returnTxt = "<pre>There's a good boy/grill <br>";
  $returnTxt .= print_r($request, true);
  $returnTxt .= "</pre>";
  echo $returnTxt;
  exit;
}
function askedWithGet() {
  echo "Oh my god why? :(";
  print_r($_GET);
  exit;
}
?>
