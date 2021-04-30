/**
 * Se a expressão for verdadeira retorna os filhos do componente
 * <If teste{exp}>
 *    <span>...</span>
 *    <span>...</span>
 *    <span>...</span>
 * </If>
 */

const If = (props) => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};

export default If;
