<?php
/**
 * Plugin Name: Norsk uttale
 * Plugin URI: https://www.valodumaja.lv/no/sprakenes-hus/
 * Description: Norsk uttale
 * Version: 0.1
 * Text Domain: uttale-norsk
 * Author: Øyvind Rangøy
 * Author URI: https://www.rangoy.com
 */
 
function display_uttale(){ 	

/* Tested: database access */
global $wpdb;
$results = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}custom_uttale_skrivemate", OBJECT );
//print_r($results);
// */


$dt =" <style> 


th { font-size: 10px; }
td { font-size: 10px; }


select {
max-width: 60px;
}


</style>";


$dt .= '<table id="arkiv" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Kons/vok</th>
                <th>Gruppe</th>
                <th>Grafem</th>
                <th>Regeltype</th>
                <th>Forklaring</th>
                <th>IPA</th>
                <th>Eksempel</th>
                <th>Lånt fra</th>
                <th>Uttale (Østlandsk)</th>
                <th>Ordkommentar</th>                
                

            </tr>
        </thead>
        <tbody>';



foreach  ($results as $result){

 $dt  .= "<tr>";


 $dt  .= "<td>" . $result->kons_vok . "</td>";
 $dt  .= "<td>" . $result->gruppe . "</td>";
 $dt  .= "<td>" . str_replace(">", "&gt;", str_replace("<", "&lt;", $result->grafem)). "</td>";
 $dt  .= "<td>" . $result->regeltype . "</td>";
 $dt  .= "<td>" . $result->forklaring . "</td>";
 $dt  .= "<td>" . $result->ipa . "</td>";
 
 $dt  .= "<td>" . $result->eksempel . "</td>"; 
 $dt  .= "<td>" . $result->lant_fra . "</td>"; 
  $dt  .= "<td>" . $result->eksempel_ipa_ostlandst . "</td>";
 $dt  .= "<td>" . $result->ordkommentar . "</td>";  
 

/*
 $dt .=  "<td>"  
 . '<span class="wp-block-file">' 
 .  '<a class="wp-block-file__button" href="http://www.estlandsnytt.no/wp-content/uploads/2021/02/'.$result->filename.'" download="">Last ned</a>'  
  . "</span>"
  . "</td>";

*/



 $dt  .= "</tr>";

}


$dt .= '</tbody>
        <tfoot>
            <tr>
                <th>Kons/vok</th>
                <th>Gruppe</th>
                <th>Grafem</th>
                <th>Regeltype</th>
                <th>Forklaring</th>
                <th>IPA</th>
                <th>Eksempel</th>
                <th>Lånt fra</th>
                <th>Uttale (Østlandsk)</th>
                <th>Ordkommentar</th>                
                

            </tr>
        </tfoot>
    </table>';



return $dt;


}


function setup_scripts() {
        wp_register_style('datatables', "https://cdn.datatables.net/v/dt/dt-1.10.23/datatables.min.css");
        wp_enqueue_style('datatables');
 
        wp_enqueue_script('datatables', "https://cdn.datatables.net/v/dt/dt-1.10.23/datatables.min.js", array('jquery'));
        wp_enqueue_script('datatables-config', '/wp-content/plugins/uttale/datatables.js', array( 'datatables' ));
}



add_action('wp_enqueue_scripts', 'setup_scripts');
add_shortcode('uttale', 'display_uttale');

