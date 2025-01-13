
const { moneyMask } = require("../../helpers/converters")


export default function MoneyDisplay({ value, classes }) {

    if (!classes) {
        classes = "text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong"
    }

    return (

        <p className={classes}>
            {moneyMask(value)}
        </p>
    )
}