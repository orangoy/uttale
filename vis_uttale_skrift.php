<?php

function vis_uttale_skrift(){
	/* Tested: database access */
	global $wpdb;
	//$results = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}custom_uttale_skrivemate", OBJECT );


	$results = $wpdb->get_results( "SELECT 
	kons_vok,gruppe,grafem,regeltype,forklaring,ipa,
	group_concat(distinct eksempel order by eksempel separator '<br>') eksempel,
	group_concat(distinct lant_fra separator '<br>') lant_fra,
	group_concat(distinct concat('<span class=ipa_eksempel>',eksempel_ipa_ostlandsk,'</span>') order by eksempel separator '<br>') eksempel_ipa_ostlandsk,
	group_concat(distinct ordkommentar separator '<br>') ordkommentar 
	FROM {$wpdb->prefix}custom_uttale_skrivemate 
	group by kons_vok,gruppe,grafem,regeltype,forklaring,ipa
	order by grafem,CASE regeltype
    WHEN 'regel' THEN 1
    WHEN 'unntak' THEN 2
    WHEN 'fremmedord' THEN 3
    WHEN 'spesiell uttale' THEN 4
    ELSE 10
	END ASC
	", OBJECT );


	$dt =" <style>";
	$dt .= file_get_contents(plugin_dir_path( __FILE__ ) . "datatables.css");
	$dt .= "</style>";
	$dt .= '<table id="uttale_skrift" class="display" style="width:100%"><thead></thead><tbody>';
	$dt .= '</tbody><tfoot></tfoot></table>';
	$dt .= " <script>";

	$data=array();
	foreach  ($results as $result) {
		$entry                 =   array();
		$entry['kons_vok']     = $result->kons_vok;
		$entry['gruppe']       = $result->gruppe;
		$entry['ipa']          = $result->ipa;
		$entry['grafem']       = str_replace( ">", "&gt;", str_replace( "<", "&lt;", $result->grafem ) );
		$entry['regeltype']    = $result->regeltype;
		$entry['eksempel']   =   $result->eksempel;
		$entry['forklaring']   = htmlspecialchars($result->forklaring);
		$entry['lant_fra']     = $result->lant_fra;
		$entry['eksempel_ipa'] = $result->eksempel_ipa_ostlandsk;
		$entry['ordkommentar'] = $result->ordkommentar;
		$data['data'][]        = $entry;
	}

	$dt .= "var dataSet_uttale_skrift =" . json_encode($data, JSON_PRETTY_PRINT);

	$dt .=" </script>";
	return $dt;
}
