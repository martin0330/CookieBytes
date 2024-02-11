import pandas as pd
import matplotlib.pyplot as plt

#maniuplating the data to only get the countries managed by COP
countries_to_keep = ["United States", "Canada","Colombia","Libya","United Kingdom","Norway","Qatar","Malaysia","Singapore","Cambodia","China","Japan","Australia"]
mask = df['Entity'].isin(countries_to_keep)

df_filtered = df[mask]
df_absolute_co2 = df_filtered.dropna()

co2_read = 'co2-fossil-plus-land-use.csv'
co2 = pd.read_csv(co2_read)

total_ghg_emissions_read = pd.read_csv('total-ghg-emissions.csv')
total_ghg_emissions = total_ghg_emissions_read[mask]

modern_renewable_read = pd.read_csv('modern-renewable-prod.csv')
modern_renewable = modern_renewable_read[mask]

annual_freshwater_withdrawals_read = pd.read_csv('annual-freshwater-withdrawals.csv')
annual_freshwater_withdrawals = annual_freshwater_withdrawals[mask]
                                                              
plastic_pollution_read = pd.read_csv('plastic-pollution.csv')
plastic_pollution = plastic_pollution_read[mask]

 

def annual_co2_emissions(countryName):
    country_mask = df_absolute_co2["Entity"] == countryName
    country_df = df_absolute_co2[country_mask]

    plt.scatter(country_df['Year'],country_df['Annual CO₂ emissions'])
    plt.xlabel('X-axis Label')
    plt.ylabel('Y-axis Label')
    plt.title(f'Scatter Plot for {countryName}')
    plt.show()

#annual_co2_emissions("United Kingdom")
    
total_ghg_emissions = pd.read_csv('total-ghg-emissions.csv')
modern_renewable = pd.read_csv('modern-renewable-prod.csv')
annual_freshwater_withdrawals = pd.read_csv('annual-freshwater-withdrawals.csv')
plastic_pollution = pd.read_csv('plastic-pollution.csv')

new_mask = merged_data_set['Entity'].isin(countries_to_keep)
merged_data_set_filtered = merged_data_set[new_mask]         


merged_data_set_filtered.to_csv('metrics_final.csv', index=False)



    



