
const { moneyMask } = require("../../helpers/converters")


export default function MoneyField({ value, onChange, classes }) {

    if (!classes) { 
        classes = "text-tremor-metric"
    }

    return (

        <input
            className={classes + " dark:text-dark-tremor-content-strong border-none w-full p-0"}
            // defaultValue='$000'
            value={moneyMask(value)}
            // value={value}
            onChange={onChange}
        />
    )
}