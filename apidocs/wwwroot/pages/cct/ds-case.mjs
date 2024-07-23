import { ref, provide, onMounted } from "vue"
import {dsgrid, fetch_agency_DS, fetchDS} from "./data.mjs"
export default {
    components: {
        dsgrid,
    },
    setup() {
        const ds = ref([])
        const csi_case = ref([])
        // const client = useClient()
        provide('ds', ds)
        provide('csi_case', csi_case)
        onMounted(async () => {
            //ds.value = await fetchDS('ds_QueryCaseWithFamilyFee.json');
            ds.value = await fetch_agency_DS('ds_cc4.json', 'QueryCaseWithFamilyFee');
            csi_case.value = await fetch_agency_DS('ds_csi.json', 'QueryCaseWithFamilyFee');
        })
        return {  ds }
    }
}
