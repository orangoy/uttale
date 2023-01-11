<?php

/* Tested: database access */
global $wpdb;
$results = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}custom_uttale_skrivemate", OBJECT );


$data=array();

foreach  ($results as $result) {
	$entry                 = array();
	$entry['kons_vok']     = $result->kons_vok;
	$entry['gruppe']       = $result->gruppe;
	$entry['grafem']       = str_replace( ">", "&gt;", str_replace( "<", "&lt;", $result->grafem ) );
	$entry['regeltype']    = $result->regeltype;
	$entry['forklaring']   = $result->forklaring;
	$entry['lant_fra']     = $result->lant_fra;
	$entry['eksempel_ipa'] = $result->eksempel_ipa_ostlandst;
	$entry['ordkommentar'] = $result->ordkommentar;
	$data['data'][]        = $entry;
}


echo json_encode($data);
