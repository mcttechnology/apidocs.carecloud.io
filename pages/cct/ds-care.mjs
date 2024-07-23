import { ref, provide, onMounted } from "vue"
import {dsgrid, fetch_agency_DS, fetchDS} from "./data.mjs"
export default {
    components: {
        dsgrid,
    },
    setup() {
        const ds = ref([])
        const csi_care = ref([])

        provide('ds', ds)
        provide('csi_care', csi_care)
        
        onMounted(async () => {
            //ds.value = await fetchDS('ds_QueryCare.json');
            ds.value = await fetch_agency_DS('ds_cc4.json', 'QueryCare');
            csi_care.value = await fetch_agency_DS('ds_csi.json', 'QueryCare');
        })
        return {  ds }
    }
}
