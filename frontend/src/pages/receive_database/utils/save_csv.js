const download_csv = (data) => {
    // Extract field_order from the keys of the first object
    const field_order = Object.keys(data.user[0])
        .reduce((acc, key) => {
            if (typeof data.user[0][key] === 'object' && data.user[0][key] !== null) {
                const nested_keys = Object.keys(data.user[0][key]);
                acc.push(...nested_keys.map(nested_key => `${key}.${nested_key}`));
            } else {
                acc.push(key);
            }
            return acc;
        }, []);

    // Map data to CSV rows
    const csv_rows = data.user.map(item => {
        // Extract values for each field in the specified order
        const row_values = field_order.map(field => {
            const [field_name, subField_name] = field.split('.');
            const value = subField_name ? item[field_name][subField_name] : item[field_name];
            return value !== undefined ? value : '';
        });

        return row_values.join(',');
    });

    // Create the CSV content
    const csv_data = [
        field_order.join(','),
        ...csv_rows
    ].join('\n');

    // Create a Blob containing the CSV data
    const blob = new Blob([csv_data], { type: 'text/csv' });

    // Create a URL to the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';

    // Append the link element to the document body and trigger the download
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
};

export {
    download_csv
};