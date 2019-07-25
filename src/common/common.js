export const getAvatarLetter = (text) => {
    let val = '';
    if (text.indexOf(' ') > -1) {
        let splitVal = text.split(' ');
        val = `${splitVal[0][0]}${splitVal[1][0]}`;
    } else {
        val = text.length > 1 ? `${text[0]}${text[1]}` : text[0];
    }
    return val.toUpperCase();
}

export const styles = {
    headerContent: {
        fontWeight: 'bold',
        marginBottom: '0'
    },
    avatarDesign: {
        backgroundColor: 'red',
        height: '55px',
        width: '55px',
        borderRadius: "30px",
        textAlign: "center",
        margin: "0 auto"
    },
    avatarInnerDesign: {
        top: "15px",
        position: "relative",
        color: 'white'
    },
    colCenter: {
        textAlign: "center",
        top: "15px"
    },
    elipsis: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    alignCenter: {
        textAlign: "center"
    },
    alignCenterEighty: {
        width: "80%",
        margin: "0 auto"
    },
    contentAlign: {
        paddingTop: "25px",
        paddingBottom: "20px"
    },
    contactView: {
        margin: "10px",
        backgroundColor: "#d3d3d36b",
        padding: "15px"
    },
    contentValAlign : {
        wordBreak: "break-all",
        fontWeight: "bold"
    }
};