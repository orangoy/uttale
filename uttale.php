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

// Setup datatables
function setup_scripts() {
        wp_register_style('datatables', "https://cdn.datatables.net/1.11.4/css/jquery.dataTables.css");
        wp_enqueue_style('datatables');
 
        wp_enqueue_script('datatables', "https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js", array('jquery'));
        wp_enqueue_script('datatables-config', '/wp-content/plugins/uttale/datatables.js', array( 'datatables' ));
}

// Main function
include plugin_dir_path( __FILE__ ) . "vis_uttale.php";

// Add function and shortcode
add_action('wp_enqueue_scripts', 'setup_scripts');
add_shortcode('uttale', 'vis_uttale');
