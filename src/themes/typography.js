/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export default function themeTypography(theme) {
    return {
        fontFamily: theme?.customization?.fontFamily,
        h6: {
            fontWeight: 500,
            color: theme.heading,
            fontSize: '0.75rem'
        },
        h5: {
            fontSize: '0.875rem',
            color: theme.heading,
            fontWeight: 500
        },
        h4: {
            fontSize: '1rem',
            color: theme.heading,
            fontWeight: 600
        },
        h3: {
            fontSize: '1.25rem',
            color: theme.heading,
            fontWeight: 600
        },
        h2: {
            fontSize: '1.5rem',
            color: theme.heading,
            fontWeight: 700
        },
        h1: {
            fontSize: '2.125rem',
            color: theme.heading,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.textDark
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.darkTextSecondary
        },
        caption: {
            fontSize: '0.75rem',
            color: theme.darkTextSecondary,
            fontWeight: 400
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.334em'
        },
        body2: {
            letterSpacing: '0em',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: theme.darkTextPrimary
        },
        button: {
            textTransform: 'capitalize'
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
                top: -5,
                left: 0,
                color: '#e0e0e0',
                '&[data-shrink="false"]': {
                    top: 5
                }
            },
            '& > div > input': {
                padding: '20px 14px 20px !important',
                backgroundColor: 'transparent !important',
                color: '#FFFFFF',
                borderRadius: '19px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '39px'
            },
            '& > div': {
                padding: '0px !important',
                backgroundColor: 'transparent !important',
                color: '#FFFFFF'
            },
            '& legend': {
                display: 'none'
            },
            '& fieldset': {
                top: 0,
                borderColor: 'white'
            },
            '& > div > textarea': {
                padding: '20px 14px 20px !important',
                backgroundColor: 'transparent !important',
                color: '#FFFFFF'
            },
            '& > div > div > button': {
                marginRight: '0px'
            },
            //Autocomplete combox
            '& > div > div': {
                height: '68px',
                backgroundColor: 'transparent !important',
                color: '#FFFFFF'
            },
            '& > div > div > input': {
                padding: '14px 14px 14px !important',
                backgroundColor: 'transparent !important',
                color: '#FFFFFF',
                borderRadius: '19px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '39px'
            },
            '& > div > label': {
                top: -5,
                left: 0,
                color: '#e0e0e0',
                '&[data-shrink="false"]': {
                    top: 5
                }
            }
        },
        mainContent: {
            backgroundColor: theme.background,
            width: '100%',
            minHeight: '100vh',
            flexGrow: 1,
            padding: '55px 55px 0px 55px',
            borderRadius: `${theme?.customization?.borderRadius}px`
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.heading,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px'
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: theme.darkTextSecondary,
            textTransform: 'capitalize'
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px'
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem'
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem'
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem'
        }
    };
}
