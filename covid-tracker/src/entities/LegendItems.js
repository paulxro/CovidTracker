import LegendItem from './LegendItem';

const legendItems = [
    new LegendItem(
        "5,000,000 +",
        "#741f1f",
        (cases) => cases >= 5_000_000,
        "white",
    ),
    new LegendItem(
        "1,000,000 - 4,999,999",
        "#9c2929",
        (cases) => cases >= 1_000_000 && cases < 5_000_000,
        "white",
    ),
    new LegendItem(
        "500,000 - 999,999",
        "#c57f7f",
        (cases) => cases >= 500_000 && cases < 1_000_000,
    ),
    new LegendItem(
        "100,000 - 499,999",
        "#d8aaaa",
        (cases) => cases >= 100_000 && cases < 500_000,
    ),
    new LegendItem(
        "0 - 100,000",
        "#ebd4d4",
        (cases) => cases > 0 && cases < 100_000,
    ),
    new LegendItem(
        "No Data",
        "#ffffff",
        (cases) => true,
    )

];

export default legendItems;