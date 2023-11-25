<script setup>

    import {ref } from 'vue';
    import TickTable from "../Icons/TickIconTable.vue";
    import CloseTable from "../Icons/CloseTable.vue";
    const tables = ref([
        {
            name: "Free Domain Name",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Your Website Built by us in 7days",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Free Yearly SSL Certificate",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Lifetime Free Maintenance",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Easy-to-use Website Editor",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Mobile Optimized Websites",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Unlimited Free & Paid Booking",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Use your own domain",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Customer Portal",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Discount Codes",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Pre-Built Templates",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Payment Setup",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "eCommerce Functionality",
            starter: true,
            growth: true,
            enterprise: true
        },
        {
            name: "Unlimited Subscription",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Custom Email Address",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "High-level SEO Package",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Subscription Management",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Email customizations",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Chat Integrations",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Unlimited Products",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Unlimited Services",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Unlimited storage",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Unlimited memberships",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Unbranded Emails",
            starter: false,
            growth: true,
            enterprise: true
        },
        {
            name: "Team Member Accounts",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "CRM Integrations & Addons",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "Advanced AI Writer",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "Real-time alerts",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "Auto-Scaling Servers",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "Portal Customization",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "Staff accounts",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "Custom API Integrations",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "Subscription Services",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "VIP priority support",
            starter: false,
            growth: false,
            enterprise: true
        },
        {
            name: "30-Day Money-back Guarantee",
            starter: true,
            growth: true,
            enterprise: true
        },
    ])
</script>

<template>
    <section>
        <div class="mt-24  w-full">
              
                
                <table class="table-auto w-full ">
                    <thead class="" >
                        <tr >
                        <th class=" pb-[1rem]  md:text-lg lg:text-xl mid:text-2xl font-madeForDisplaySemiBold text-start font-bold">Our Core Features</th>
                        <th class=" pb-[1rem]  md:text-lg lg:text-xl font-madeForDisplaySemiBold font-semibold">Starter</th>
                        <th class=" pb-[1rem]  md:text-lg lg:text-xl font-madeForDisplaySemiBold font-semibold">Growth </th>
                        <th class=" pb-[1rem]  md:text-lg lg:text-xl font-madeForDisplaySemiBold font-semibold">Enterprise  </th>
                        </tr>
                    </thead>
                    <tbody v-for="(table, i ) in tables" :key="i"  class="border-[0.1rem] rounded-b-[2rem] border-[bg-rgba(0, 0, 0, 0.25)]">
                        <tr class="border-b-[0.1rem] sm:h-12 border-[bg-rgba(0, 0, 0, 0.25)]">
                            <td class="border border-[bg-rgba(0, 0, 0, 0.25)] text-sm font-madeForDisplayMedium md:text-lg px-5">{{table.name}}</td>
                            <td class="border w-[17rem] border-[bg-rgba(0, 0, 0, 0.25)] "> 
                                
                                <span v-if="table.starter" class="flex place-content-center">
                                    <tick-table/>
                                </span>
                                <span v-else class="flex place-content-center">
                                    <close-table/>
                                </span>
                            </td>
                            <td class="w-[17rem] border border-[bg-rgba(0, 0, 0, 0.25)] "> 
                                
                                <span v-if="table.growth" class="flex place-content-center">
                                    <tick-table/>
                                </span>
                                <span v-else class="flex place-content-center">
                                    <close-table/>
                                </span>
                            </td>
                            <td class="w-[17rem] border border-[bg-rgba(0, 0, 0, 0.25)]"> 
                                
                                <span v-if="table.enterprise" class="flex place-content-center">
                                    <tick-table/>
                                </span>
                                <span v-else class="flex place-content-center">
                                    <close-table/>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    </table>
            </div>
    </section>
</template>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 350px;
}
/* tbody tr td{
    border-radius: 20rem;
} */
/* tbody tr,
tbody tr td {
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  padding: 5px;
}
tbody
tbody tr,
tbody tr td:first-child {
  border-left: 1px solid #bbb;
}
tbody tr {
  background: #eee;
  border-top: 1px solid #bbb;
  text-align: left;
} */

/* tbody tr:first-child th:first-child {
  border-top-left-radius: 6px;
}

tbody tr:first-child th:last-child {
  border-top-right-radius: 6px;
}

tbody tr:last-child td:first-child {
  border-bottom-left-radius: 6px;
}

tbody tr:last-child td:last-child {
  border-bottom-right-radius: 30px;
} */
</style>