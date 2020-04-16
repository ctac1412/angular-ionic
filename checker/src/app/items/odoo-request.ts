export interface OdooRequest {
        id: number;
        switch_state: boolean;
        is_need_to_send: boolean;
        switch_logger_ids: any[];
        woocommerce_order_id: number;
        podpisant_lab_employee: any[];
        important_score: string;
        avg_temperatura: number;
        avg_davlenie: number;
        avg_vlajnost: number;
        act_of_sampling_id: any[];
        act_of_return_id: any[];
        workbook_ids: number[];
        act_of_sampling_applicant: boolean;
        reject_reason_id: boolean;
        equipment_string: string;
        results_identification: string;
        lab_employee_local_ids: any[];
        is_change_from_request_id: boolean;
        is_research_in_partner: boolean;
        research_progress: number;
        name_field: string;
        archive_journal_id: boolean;
        compute_data_prot_app: string;
        req_sheet_id: any[];
        overwrite_protokol_num_reason: boolean;
        state: string;
        notes: boolean;
        request_name: string;
        request_date: string;
        new_application_name: boolean;
        application_name: string;
        application_date: string;
        protocol_num: string;
        protocol_data_vidachi: string;
        customs_info_message_id: boolean;
        lab_client_id: any[];
        uu_client_id: boolean;
        made_by_expert: boolean;
        need_send_changes: boolean;
        doc_exec_decl: boolean;
        doc_exec_cert: boolean;
        doc_exec_other: boolean;
        doc_exec_notes: boolean;
        request_research_target_ids: any[];
        provesti_otbor_obrazcov: boolean;
        provesti_lab_research: boolean;
        vidat_expert_conclusion: boolean;
        do_different: boolean;
        different_descr: boolean;
        addres_otbor: boolean;
        product_type: boolean;
        type_of_research: string;
        date_received: string;
        product_name: string;
        product_info: string;
        tnved_ids: any[];
        okpd_ids: any[];
        environment_indicator_local_ids: any[];
        example_counts: number;
        example_name: boolean;
        sample_ids: number[];
        expert_results: boolean;
        v_sootvetstvii_s: string;
        perechen_documentov: boolean;
        shifr_obrazca: string;
        sample_shifr_obrazca: string;
        lab_id: any[];
        request_mi_line_ids: number[];
        fgis_id: number;
        attachment: boolean;
        attachment_name: boolean;
        fgis_replication_id: any[];
        is_no_real_value_text_check: boolean;
        is_no_int_check: boolean;
        is_no_mark_check: boolean;
        is_no_fgis_check: boolean;
        is_research_obj_default: boolean;
        is_research_result_default: boolean;
        is_equipment_default: boolean;
        is_consumer_default: boolean;
        is_approvedUser_default: boolean;
        is_requisites_default: boolean;
        is_research_obj_empty: boolean;
        is_research_result_empty: boolean;
        is_equipment_empty: boolean;
        is_consumer_empty: boolean;
        is_approvedUser_empty: boolean;
        is_requisites_empty: boolean;
        barcode: string;
        bar_number_id: any[];
        manufacturer_partner_id: any[];
        root_manufacturer_partner_id: any[];
        applicant_partner_id: any[];
        root_applicant_partner_id: any[];
        message_follower_ids: any[];
        message_ids: any[];
        message_last_post: boolean;
        create_uid: any[];
        create_date: string;
        write_uid: any[];
        write_date: string;
        number_act: string;
        request_id: number[];
        return_data: string;
        return_type: string;
        fgis_status: string;
        fgis_log_ids: any[];
        is_button_states_visible: boolean;
        archive_state: boolean;
        getNextShifr: number;
        lab_client_count: number;
        sum_lab_hours: number;
        sum_lab_hours_left: number;
        research_hours_string: string;
        fgis_url: boolean;
        manufacturer_print_string: string;
        manufacturer_applican_head: boolean;
        manufacturer_responsible_surname: boolean;
        manufacturer_responsible_first_name: boolean;
        manufacturer_responsible_patronymic: boolean;
        manufacturer_responsible_doc_name: boolean;
        manufacturer_responsible_doc_number: boolean;
        manufacturer_responsible_doc_date: boolean;
        manufacturer_contact_ids: any[];
        applicant_print_string: string;
        applicant_applican_head: boolean;
        applicant_responsible_surname: boolean;
        applicant_responsible_first_name: boolean;
        applicant_responsible_patronymic: boolean;
        applicant_responsible_doc_name: boolean;
        applicant_responsible_doc_number: boolean;
        applicant_responsible_doc_date: boolean;
        applicant_contact_ids: any[];
        message_is_follower: boolean;
        message_partner_ids: any[];
        message_channel_ids: any[];
        message_unread: boolean;
        message_unread_counter: number;
        message_needaction: boolean;
        message_needaction_counter: number;
        display_name: string;
        __last_update: string;
    }