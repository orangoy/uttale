<?php
/**
 * Plugin Name: Norsk uttale
 * Plugin URI: https://www.valodumaja.lv/no/sprakenes-hus/
 * Description: Norsk uttale
 * Version: 0.99
 * Text Domain: uttale-norsk
 * Author: Øyvind Rangøy
 * Author URI: https://www.rangoy.com
 */

// Include installation scripts
include plugin_dir_path( __FILE__ ) . "install.php";

// Install tables and data on activation
register_activation_hook( __FILE__, 'uttale_install' );
register_activation_hook( __FILE__, 'uttale_install_data' );

// Setup datatables and css
function setup_scripts() {
        wp_register_style('datatables', "https://cdn.datatables.net/1.11.4/css/jquery.dataTables.css");
        wp_enqueue_style('datatables');
 
        wp_enqueue_script('datatables', "https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js", array('jquery'));
        wp_enqueue_script('datatables-config', plugin_dir_url( __FILE__ ) . 'datatables.js', array( 'datatables' ));
}
// Add function and shortcode
add_action('wp_enqueue_scripts', 'setup_scripts');


// Main functions
include plugin_dir_path( __FILE__ ) . "vis_skrift_uttale.php";
add_shortcode('skrift_uttale', 'vis_skrift_uttale');


include plugin_dir_path( __FILE__ ) . "vis_uttale_skrift.php";
add_shortcode('uttale_skrift', 'vis_uttale_skrift');


