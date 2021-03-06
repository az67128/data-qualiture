import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import indigo from "@material-ui/core/colors/indigo";

export const PRIMARY_COLOR = "#549beb";

export const WS_URL = "https://127.0.0.1:8080/";

export const LOGO_IMG1 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwoSIQAcCKOhAAADrUlEQVRo3u2ZT2hTWRTGv5vGVLAwiN0oVKUIjdQZrUqx1IqgqIiMYNGFG0tnwMGNI7hw4UrBhUsRDKIoLqoboaIFEQRBqBYpKKUoWgIdVOykMojiv9H8XPT1viTv+pq/1sU7q8M53/ne7yYv974k0s8U9DLMILuL1u9liCH2Fq3fzSDD9H6vvYHpaCnKrs3q24rSt1j9Br8ay1H8abM/ilrQX44sLHxX/0p5AIsdWVgscWRh4fSPFTVaw4gAIoAIIALIBcCRVTOc/rkA/9rsv5oA+K4TQbg2buBHlj6aZ1zQTau/OaO2mT6yOVe4xorc9i7+pzDesr5aAKznbcD/E79Pt7fxGYBHHKSDLg7zzENorwYA7d7ln3GYLjo4yCMPYask4owBcJI5dmQe5wEYqgrAEADnmWcrczgJwBhx0QvAQMFQnTe2vVIAtk8thbqC+gAAvaIfIHjL0QFAqmKAFAAdgXozAP0xJSVNmHRg8oE+Skqq0khK+qgHhWWT1oSkZExNksaCc+aL0pKaKgZokpQ2XxydMUlNMaUlOZ6CSWiZpPGKAcYlLSPh6LRISsc0KqmR1kC7SwlJTyoGeCIpoa7AAlvVKGlU7AHgLnnHEvWMArD5+85F3oSbARilPq8a4y4Ae4TxtoULNNj2Au+zcTtsaUXvA7en7ncW2EoDF7ytz0iik3fetnCMnXRzgpcAvHa8MbnG1y3A9VBdK68BeMkJutnJMW/re0fntKSTN4G9OsPKUNu53lYCMMDcUO1KMgH/N/byksRSznknAsAHTrEo1LKH53l2z+kJ1S/iFB+s+jPnWBoUHbGCUDOJo1b5nvc2PzrDVI9VHnEL+q0gFWq031NdZDVx4qzmolfZHzqXsv79bsEdK7gSYtNABsjSnVftJgtk/E+SY/KK9b/jV0t/KD2gRklnzNXcormqM5IadaBUu9IBpp6Tjgfqx3O6NQVISnphXhWWzSu9UBmnZ+kAv0iadHYmvW6NAR5LWh483UhoudetMcCIpIR2BOo7lPC6NQY4q6yk08zPW/98nZaU1dmaA5gRXZa0UPf8h3badU8LJfWZkl+BeMmvgPS3ftOvatEg9zUsaY3WqU7SiA6VblYGgJlkk25plerUKf9Ee6gtZrJ0t7K+npuM1mqfntrCU+3TWpMpx6vM3wfMV3NJ/pGVMpfM1/KcKvmBYqMj+6EA9Y7shwJUJSKACCACiAAigJ8K4B9HFhbjjiwsZvKfnb9u8yWz++f17MQ3n1Bnq6qRjCMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMTBUMTg6MzM6MDArMDE6MDD7fIHuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTEwVDE4OjMzOjAwKzAxOjAwiiE5UgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";
export const LOGO_IMG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCgsMFDQM6VUNAAAF2klEQVRo3sWZXYxV1RXHf3sGBgSazoQGLbF8jBk/GNBg6QAZS8FgpBMTqWA1YA3WDEkfbHiwGkOayEPbIAlNQxvtA5bQTH2pwWAjfSCKigNiA+3EDz4VJYWJH8Okc0cd7dxfH+bcy7mf3Hvmcrtuzr17r/Pfe/332mfvve46kFic4tOe9axPOyV5L8nNN3rQjBy0sf4EHlT1Dd9Q9cH6j/+kes4mmzynnqyzD3xA1UcAfETVB+ppvsHjar9XAXiV/epxG+pHYJ2qj2brj6q6rn7jf1f91KlZzVQ/Vd+tkw/sUnVzjm6zql3V9zYhAYMVgKTcENOlkMAKXqqHB3otJb31MD/ZkZIERpxcbX/VT0EHTcAyzuXpv8NrNNHBa1faA0+oozYV6JscVZ+otr+SC8fZ/sFlOZoWN9rCbcCF8FU+PnzFBeC2CFWDkf5WPZaj6VXf9qJ6sGiLg+pF367uYSy9dbREV6b7TpYC7TQDH0a66a52tdMjyIdAM+3AUjvHTyBffhErnwVwHRfYwx4uRJvw2RLoZOIuNdulN5hWj0fLrRvsNJ1dfmk7we6odlxNe0NtPdBNQH6KAHwEbCAwzFrWMkxgQ6QlQgW6a0tgPvBm6OVNAEaARcCx8Hx4nmNRbQRiqPm1JdAGHIguwEAbMArRd5shQmZQbTUkYBOzgX9HF8BMpuZApjIzKmVQsws3q+QemEtjHoH2MWYxTHsegUbmjo/AUHQBXAPAxegCeBiAEMM/HP1eQl1TCYHSh9EOrmZXVA559+awpgC/hn15mkAFUpJAOMmPS7baRGEQ3simSgzmS7Io7pYqtMkJ+K0y7UY4n1M/H+0CtSPgej72jwXqTMSzkVM5+lNszEOM2wOLCSzNI3UPPQBsC7vz4WE32wDo8Z5kvsj3wHXu9o6ovFzVf6k66mYDeEA9AJdKBjc7GkMurwmRGAHVT1wZ6QoIALjST7LYighUtgoyXT3HgrC/HDDsZwHP5bUa9/jvNq2mvD9HW9QD0b37Talp766F+fkOqadtz9OXIQC2e1od8rKH8mWmwOnsZRqDrArvVEM7vMMqBpnG3mzEmIwAO5lLmvXhdLWeC6dZT5q57Ky2ZXz8rabVZ4veKzsFEeZZNW1rcg9sJJBma+IRbCVNyO6R1RJwIg8BL4QTSe2HE7wAPOTEZB6YzwwoOOWrk33AjHIBajkCYyHVoXEROBTrqaiU+3veCqS5M3Mi5Mm1wLVuyikVG2CaBso+hiXFHdZKdpS2Um4KXiI1LvdnJJU4c+Qkm7Of76u6PqrNUnWLzTb7uKo3Z5F3qXpXtj6pnI2yKZowcinQcixEHw6DAN4MwOEwCL4OwPWhL0KO+S01hrycJE0t3grAWALjKP8FOpJ1lJTAQqA/9AOEL+kDvld/ApcSOEeA72YTtX0MMUTfFSTgZG4C/plD4BvcOFYJA8xhThi4kh5YwIQCD8QmIQxUar6AgBO91cVFF85o7HshAC0u99sAvMcQscfQbivMj8RNT/FXHvHLKOV62O3OyLnfYK8n/CY4zb/HdrlBn3GWr6hHImSraqkowOIL305PFWyg511RBNnlR0VyxOfVkbGUhA322JP/7sDZPu4e+x3xSDwFGgD8Gb+nATjEft4izQ9YxiIaSfMbPqCDeZzhH/wpDPsj/koDcJRdnGQCd3Bn5uEDOsJbJca9ir/Es47IMzwWxrYsb/QLdcicyMUuUwUeedIv1M+9Lwe5yIEI8WfvdV5m7La4xJ+4wdv9ZfSP6X13usW9XlT1PacANnpY/dpFBaw7/FjVIV91MObugiyoS3LI9rnSW+zx6xz6//H2LP5q96r6O8A1qj5Z1HGz3OIPnQQ2usZhVX9dFLnSz8seyAMuzmuxT027BJ9SU+Wittg4j/piqffEtttlqwt9LCI66k7Xer1trvbnXleAn2lK3YovqxW/ZLCCvI8LfNW/ufCyuFfUl/EzdVulBGopPqV+hts947z/C4F5nnH7/wB38LL9NvFzxgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0xMVQxMjoyMDo1MiswMjowMF/aImEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMTFUMTI6MjA6NTIrMDI6MDAuh5rdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==";

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo,
  },
});
export const requiredQueryFieds = [
  "query_name",
  "query_description",
  "target_id",
  "datasource_id",
  "query_status_id",
  "error_report_script",
];
