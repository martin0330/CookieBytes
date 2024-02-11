import pandas as pd
import matplotlib.pyplot as plt

#maniuplating the data to only get the countries managed by COP
countries_to_keep = ["United States", "Canada","Colombia","Libya","United Kingdom","Norway","Qatar","Malaysia","Singapore","Cambodia","China","Japan","Australia"]

df = pd.read_csv('co2-fossil-plus-land-use.csv')
mask = df['Entity'].isin(countries_to_keep)
df_filtered = df[mask]
df_absolute_co2 = df_filtered.dropna()

total_ghg_emissions_read = pd.read_csv('total-ghg-emissions.csv') #read in csv
ghg_mask = total_ghg_emissions_read['Entity'].isin(countries_to_keep) #masking data for certain countries
total_ghg_emissions = total_ghg_emissions_read[ghg_mask] #final dataset

modern_renewable_read = pd.read_csv('modern-renewable-prod.csv')
renewable_mask = modern_renewable_read['Entity'].isin(countries_to_keep)
modern_renewable = modern_renewable_read[renewable_mask]

annual_freshwater_withdrawals_read = pd.read_csv('annual-freshwater-withdrawals.csv')
freshwater_mask = annual_freshwater_withdrawals_read['Entity'].isin(countries_to_keep)
annual_freshwater_withdrawals = annual_freshwater_withdrawals_read[freshwater_mask]
                                                              
plastic_pollution_read = pd.read_csv('plastic-pollution.csv')
pollution_mask = plastic_pollution_read['Entity'].isin(countries_to_keep)
plastic_pollution = plastic_pollution_read[pollution_mask]
 

def graphing(countryName, dataset):
    #pollution is bar graph based on country for 2019
    #co2 and ghg is scatter: year vs amount for select country
    #renewable is line graphs: year vs amount of energy based on energy types for select country
    #freshwater is year vs amount withdrawn for select country

    plt.style.use('dark_background')  # Change the style of the plot

    if (dataset == "df_absolute_co2"):
        country_mask = df_absolute_co2["Entity"] == countryName
        country_df = df_absolute_co2[country_mask]

        plt.figure(figsize=(10, 6))
        plt.scatter(country_df['Year'], country_df['Annual CO₂ emissions'], color='purple', alpha=0.5)
        plt.grid(True)
        plt.xlabel('Year', fontsize=14, color='lightblue')
        plt.ylabel('Annual CO₂ emissions', fontsize=14, color='lightblue')
        plt.title(f'Annual Co2 emissions {countryName}', fontsize=16, color='lightblue')
        plt.savefig(dataset+"_"+countryName)
        plt.show()

    elif (dataset == "total_ghg_emissions"):
        country_mask = total_ghg_emissions["Entity"] == countryName
        country_df = total_ghg_emissions[country_mask]

        plt.figure(figsize=(10, 6))
        plt.scatter(country_df['Year'], country_df['Annual greenhouse gas emissions in CO₂ equivalents'], color='purple', alpha=0.5)
        plt.grid(True)
        plt.xlabel('Year', fontsize=14, color='lightblue')
        plt.ylabel('Emmisions in Co2 equivalents', fontsize=14, color='lightblue')
        plt.title(f'Annual greenhouse gas emissions for {countryName}', fontsize=16, color='lightblue')
        plt.savefig(dataset+"_"+countryName)
        plt.show()

    elif(dataset == "modern_renewable"):
        country_mask = modern_renewable["Entity"] == countryName
        country_df = modern_renewable[country_mask]

        plt.figure(figsize=(10, 6))
        plt.plot(country_df['Year'], country_df['Electricity from wind - TWh'], label='Wind', marker='o', color='red', alpha=0.5)
        plt.plot(country_df['Year'], country_df['Electricity from hydro - TWh'], label='Hydro', marker='o', color='purple', alpha=0.5)
        plt.plot(country_df['Year'], country_df['Electricity from solar - TWh'], label='Solar', marker='o', color='blue', alpha=0.5)
        plt.plot(country_df['Year'], country_df['Other renewables including bioenergy - TWh'], label='Other', marker='o', color='orange', alpha=0.5)
        plt.grid(True)
        plt.xlabel('Year', fontsize=14)
        plt.ylabel('Electricity in TWh', fontsize=14)
        plt.title(f'Modern renewable energy generation by source for {countryName}', fontsize=16, color='lightblue')
        plt.legend()
        plt.savefig(dataset+"_"+countryName)
        plt.show()

    elif(dataset == "annual_freshwater_withdrawals"):
        country_mask = annual_freshwater_withdrawals["Entity"] == countryName
        country_df = annual_freshwater_withdrawals[country_mask]

        plt.figure(figsize=(10, 6))
        plt.scatter(country_df['Year'], country_df['Annual freshwater withdrawals, total (billion cubic meters)'], color='purple', alpha=0.5)
        plt.grid(True)
        plt.xlabel('Year', fontsize=14, color='lightblue')
        plt.ylabel('Withdrawals in billion cubic meters', fontsize=14, color='lightblue')
        plt.title(f'Annual freshwater withdrawals for {countryName}', fontsize=16, color='lightblue')
        plt.savefig(dataset+"_"+countryName)
        plt.show()

    elif(dataset == "plastic_pollution"):
        country_mask = plastic_pollution["Entity"] == countryName
        country_df = plastic_pollution[country_mask]

        plt.figure(figsize=(10, 6))
        plt.bar(country_df['Entity'], country_df['Mismanaged plastic waste to ocean per capita (kg per year)'], color='purple', alpha=0.5)
        plt.grid(True)
        plt.xlabel('Country', fontsize=14, color='lightblue')
        plt.ylabel('kg/year', fontsize=14, color='lightblue')
        plt.title('Mismanaged plastic waste to ocean per capita (kg per year)', fontsize=16, color='lightblue')
        plt.savefig(dataset+"_"+countryName)
        plt.show()

graphs = ["df_absolute_co2","total_ghg_emissions","modern_renewable","annual_freshwater_withdrawals","plastic_pollution"]

for country in countries_to_keep:
    for graph in graphs:
        graphing(country,graph)
