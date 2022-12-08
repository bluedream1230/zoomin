export default function componentStyleOverrides(theme) {
    const bgColor = theme.colors?.grey50;
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px'
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                },
                rounded: {
                    borderRadius: `${theme?.customization?.borderRadius}px`
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: theme.colors?.textDark,
                    padding: '30px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '30px'
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '30px'
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    padding: '0px',
                    margin: '0px',
                    '& .MuiGrid-item': {
                        padding: '0px',
                        paddingRight: '20px'
                    }
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: '#B9B9B9',
                    '& .MuiListItemIcon-root': {
                        '& svg:hover': {
                            stroke: '#04B4DD',
                            fill: '#04B4DD'
                        }
                    },
                    '&.Mui-selected': {
                        color: theme.menuSelected,
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'transparent'
                        },
                        '& .MuiListItemIcon-root': {
                            '& svg': {
                                stroke: '#04B4DD',
                                fill: '#04B4DD'
                            }
                        }
                    },
                    '&:hover': {
                        color: '#04B4DD',
                        '& .MuiListItemIcon-root': {
                            '& svg': {
                                stroke: '#04B4DD',
                                fill: '#04B4DD'
                            }
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.darkTextPrimary,
                    minWidth: '36px'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: theme.textDark
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: theme.textDark,
                    '&::placeholder': {
                        color: theme.darkTextSecondary,
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: bgColor,
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.colors?.grey400
                    },
                    '&:hover $notchedOutline': {
                        borderColor: theme.colors?.primaryLight
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: bgColor,
                    padding: '15.5px 14px',
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: `${theme?.customization?.borderRadius}px`
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: theme.colors?.grey300
                    }
                },
                mark: {
                    backgroundColor: theme.paper,
                    width: '4px'
                },
                valueLabel: {
                    color: theme?.colors?.primaryLight
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.divider,
                    opacity: 1
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: theme.colors?.primaryDark,
                    background: theme.colors?.primary200
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: 'inherit'
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: theme.paper,
                    background: theme.colors?.grey700
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    width: '100%'
                }
            }
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#36006844',
                    boxShow: '40px 7px 132px rgba(0,0,0,0.37px)',
                    borderRadus: '20px'
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '100%'
                }
            }
        },
        MuiPickersCalendarHeader: {
            styleOverrides: {
                root: {
                    background: '#EC3E50',
                    flexDirection: 'row-reverse',
                    color: 'white',
                    marginTop: 0,
                    marginBottom: 0,
                    paddingTop: '16px',
                    paddingBottom: '18px',
                    paddingLeft: '24px',
                    paddingRight: '12px',
                    maxHeight: '50px',
                    '& .MuiPickersArrowSwitcher-root': {
                        '& .MuiIconButton-edgeStart': {
                            position: 'absolute',
                            right: '20px',
                            color: 'white'
                        },
                        '& .MuiIconButton-edgeEnd': {
                            color: 'white'
                        },
                        '& .css-xb7uwb-MuiPickersArrowSwitcher-spacer': {
                            width: '45px'
                        }
                    },
                    '& .MuiPickersCalendarHeader-labelContainer': {
                        '& .MuiPickersFadeTransitionGroup-root': {
                            border: 'none !important',
                            background: 'none !important'
                        }
                    }
                }
            }
        },
        MuiPickersPopper: {
            styleOverrides: {
                root: {
                    maxWidth: '320px',
                    width: '100%',
                    background: 'linear-gradient(158.72deg, rgba(0, 0, 0, 0.4) 3.01%, rgba(255, 255, 255, 0) 103.3%)',
                    backdropFilter: 'blur(42px)',
                    borderRadius: '23px',
                    overflow: 'hidden'
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    '& > div > p': {
                        display: 'none'
                    },
                    '& .MuiTablePagination-actions': {
                        display: 'none'
                    },
                    '& .MuiInputBase-root': {
                        margin: '0px',
                        '& > div': {
                            color: '#B9B9B9'
                        },
                        '& > svg': {
                            color: '#B9B9B9'
                        }
                    }
                }
            }
        },
        MuiPickersFadeTransitionGroup: {
            styleOverrides: {
                root: {
                    '& .MuiDayPicker-header .MuiDayPicker-weekDayLabel:first-child': {
                        color: '#EC3E50'
                    },
                    '& .MuiDayPicker-header .MuiDayPicker-weekDayLabel': {
                        color: '#FFFFFF',
                        fontSize: '15px',
                        fontWeight: '500'
                    },
                    '& .MuiDayPicker-header': {
                        borderBottom: '0.5px solid #FFFFFF',
                        marginBottom: '20px'
                    },
                    '& .MuiDayPicker-weekContainer > button:first-child': {
                        color: '#EC3E50'
                    },
                    '& .MuiDayPicker-weekContainer > button': {
                        backgroundColor: 'transparent',
                        color: '#FFF',
                        fontSize: '15px',
                        fontWeight: '500'
                    },
                    '& .MuiDayPicker-weekContainer > button:hover': {
                        border: '1px solid #04B4DD'
                    },
                    '& .MuiDayPicker-weekContainer > button.Mui-selected': {
                        backgroundColor: '#EC3E50'
                    },
                    border: '1px solid #04B4DD',
                    borderBottomLeftRadius: '23px',
                    borderBottomRightRadius: '23px',
                    borderTop: '0px',
                    background: 'linear-gradient(158.72deg, rgba(0, 0, 0, 0.4) 3.01%, rgba(255, 255, 255, 0) 103.3%)'
                }
            }
        }
    };
}
