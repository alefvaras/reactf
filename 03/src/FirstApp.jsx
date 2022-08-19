
const newMessage = {
    message: 'hola',
    name: 'antonio'
};

import { PropTypes } from "prop-types";
const getMessage = () => 'hola yoda';
// export const Name = ({ title, subtitulo="holi subtitulo" }) => {
    export const Name = ({ title, subtitulo }) => {
//PropTypes define el tipo a las props
// if(!title){
//     throw new Error('tile no no envia')
// }
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            {/* <div>{JSON.stringify(newMessage)}</div> */}
            <p>{subtitulo }</p>
            <p>{getMessage()}</p>
        </>

    )

}
Name.propTypes={
title:PropTypes.string.isRequired
}

Name.propTypes={
    //entran antes  del  propTypes
}
Name.defaultProps={
    subtitulo:'holi'
    }