import { makeStyles, createStyles } from "@material-ui/styles"

const logoStyles = makeStyles(theme => ({
    logo: {
        fontFamily: theme.typography.title.fontFamily,
        fontSize: size => `${size}rem`,
        lineHeight: 0.7
    },
    subtitle: {
        fontFamily: theme.typography.title.fontFamily,
        fontSize: size => `${size/2}rem`,
        marginLeft: size => `${size*2}rem`,
        lineHeight: 1
    }
}))

export default logoStyles

