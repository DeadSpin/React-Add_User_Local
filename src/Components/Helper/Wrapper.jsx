
/**
 * 
 * @param {*} props 
 * @returns 
 * 
 * Wrapper component helps to reduce the nummber of wrapping div
 * As react only support one root element to return but if we have multiple then we can use Wrapper like that 
 * Or also can write every thing inside <React.Fragment> </React.Fragment> or <> </>
 */


const Wrapper = props => {
  return props.children
}

export default Wrapper