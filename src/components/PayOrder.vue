<template>
  <div class="form-group">
    <h4>Contacto</h4>
    <v-simple-table v-if="pedido">
      <template v-slot:default>
        <tbody>
          <tr>
            <td>Folio pedido</td>
            <td>{{ pedido.identy || "" }}</td>
          </tr>
          <tr>
            <td>Contacto</td>
            <td>
              Nombre {{ pedido.conctacto.name || "" }}
              , Teléfono
              {{ pedido.conctacto.phoneNumber || ""  }}
              , Correo {{ pedido.conctacto.email || "" }}
            </td>
          </tr>
          <tr>
            <td>Entrega</td>
            <td>
              Citio de entrega
              {{ pedido.conctacto.citio.citio }}
              , referencia
              {{ pedido.conctacto.referencia }}
              , el dia
              {{ pedido.conctacto.fecha }}
              , en horario {{ pedido.conctacto.horario.horario }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <h4>Productos</h4>
    <v-simple-table v-if="pedido">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Producto
            </th>
            <th class="text-left">
              Cantidad
            </th>
            <th class="text-left">
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pedido.productos" :key="item.id">
            <td>{{ item.product }}</td>
            <td>{{ item.cantidad }}</td>
            <td>{{ item.price }}</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>{{ pedido.total }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SliderBanner",
  data() {
    return {};
  },
  created: function() {
    this.getBannersAll();
  },
  computed: {
    ...mapState({
      pedido: (state) => state.pedidos.pedido
    }),
    ...mapGetters({
      productos: "pedidos/getProductosPedido"
    })
  },
  methods: {
    getBannersAll() {
      try {
        this.$store.dispatch("banners/load");
      } catch {
        console.log("Algo aqui");
      }
    }
  }
}
</script>
