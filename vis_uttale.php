<?php

function vis_uttale(){
	/* Tested: database access */
	global $wpdb;
	$results = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}custom_uttale_skrivemate", OBJECT );

	$dt =" <style>";
	$dt .= file_get_contents(plugin_dir_path( __FILE__ ) . "datatables.css");
	$dt .= "</style>";


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
