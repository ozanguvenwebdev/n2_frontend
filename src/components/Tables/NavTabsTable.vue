<template>
  <div>
    <md-table v-model="users" @md-selected="onSelect">
      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
        md-selectable="multiple"
        md-auto-select
      >
        <md-table-cell>{{ item.name }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "nav-tabs-table",
  data() {
    return {
      selected: [],
      users: [
        {
          name: 'Sign contract for "What are conference organizers afraid of?"',
        },
        {
          name: "Lines From Great Russian Literature? Or E-mails From My Boss?",
        },
        {
          name: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
        },
        {
          name: 'Sign contract for "What are conference organizers afraid of?"',
        },
        {
          name: "Lines From Great Russian Literature? Or E-mails From My Boss?",
        },
        {
          name: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
        },
        {
          name: 'Sign contract for "What are conference organizers afraid of?"',
        },
        {
          name: "Lines From Great Russian Literature? Or E-mails From My Boss?",
        },
        {
          name: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
        },
        {
          name: 'Sign contract for "What are conference organizers afraid of?"',
        },
        {
          name: "Lines From Great Russian Literature? Or E-mails From My Boss?",
        },
        {
          name: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
        },
      ],
    };
  },
  methods: {
    onSelect: function (items) {
      this.selected = items;
    },
  },
};
</script>
