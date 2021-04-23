import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { Container, Tipo, IconView, TipoText, ValorText } from "./styles";

export default function HistoricoList({ data }) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.tipo}>
          <Icon name={data.tipo === "despesa" ? "arrow-down" : "arrow-up"} color="#fff" size={20} />
          <TipoText>{data.tipo}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>R$ {data.valor}</ValorText>
    </Container>
  );
}
