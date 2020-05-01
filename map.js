
      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);
      
      function drawRegionsMap() {
        var data = new google.visualization.DataTable();
            data.addColumn('string', 'Country'); // Implicit domain label col.
            data.addColumn('number', 'Value'); // Implicit series 1 data col.
            data.addColumn({type:'string', role:'tooltip','p': {'html': true}}); 

            data.addRows([[{v:'CD',f:'DEMOCRATIC REPUBLIC OF CONGO'},0,'<p style="font-size:12; font-family: Arial; color: #E05988;"><br>HIV/AIDS(1980s)</p><p style="font-size:12; font-family: Calibri; color: #6DE8DA;"><br> Origin: Exposure of hunters to <br> infected blood of chimpanzees<br>containing immunodeficieny virus<br>(SIV)<br>Affected Areas: Sub-Saharan Africa,<br>North America, South America, Australia<br><br>Deaths: about 1 million<br>every year </p>']]);//1980 hiv
            data.addRows([[{v:'MY',f:'MALAYSIA'},1,'<p style="font-size:12; font-family: Arial; color: #E05988;"><br>Nipah Virus(1998-99)</p><p style="font-size:12; font-family: Calibri; color: #6DE8DA;"><br>Origin: Zoonotic pathogen spread from<br>infected pigs and bats<br><br> Affected Areas: Malaysia,<br>Singapore, Bangladesh, India<br><br>Deaths: over 50-75% of infecteds</p>']]);//1998 nipah
            data.addRows([[{v:'US',f:'UNITED STATES OF AMERICA'},2,'<p style="font-size:12; font-family: Arial; color: #E05988;"><br>Measles(2000-18)</p><p style="font-size:12; font-family: Calibri; color: #6DE8DA;"><br>Origin: Morbillivirus(rubeola) spread due to<br>coughing and sneezing causing rashes<br><br> Affected Areas: USA,<br>China, Republic of Korea<br>Japan, Vietnam<br><br>Deaths: numbers decreasing since<br>7,77,000 in 2000</p>']]);//2000 measles
            data.addRows([[{v:'MX',f:'MEXICO'},3,'<p style="font-size:12; font-family: Arial; color: #E05988;"><br>Influenza A H1N1(2009-10)</p><p style="font-size:12; font-family: Calibri; color: #6DE8DA;"><br>Origin: Swine influenza viruses<br><br> Affected Areas: Mexico,<br>North America, France, Colombia<br>Deaths: 80% of the infected</p>']]);//2009 h1n1
            data.addRows([[{v:'ZA',f:'SOUTH AFRICA'},4,'<p style="font-size:12; font-family: Arial; color: #E05988;"><br>Ebola Virus(2014-16)</p><p style="font-size:12; font-family: Calibri; color: #6DE8DA;"><br>Origin: Zaire ebolavirus<br><br> Affected Areas: Regions of<br>West Africa<br><br>Deaths: over 25,000</p>']]);//2014 ebola
            data.addRows([[{v:'CN',f:'CHINA'},5,'<p style="font-size:12; font-family: Arial; color: #E05988;"><br>COVID-19</p><p style="font-size:12; font-family: Calibri; color: #6DE8DA;"><br>Origin: Severe Acute Respiratory Syndrome<br>SARS<br><br>Affected Areas: China,<br>Hong Kong, Italy, US, Iran<br>and still counting<br><br>Deaths: over 233k among 3.26M infected</p>']]);//2019 covid

          
            var geochart = new google.visualization.GeoChart(
                document.getElementById('visualization'));
              
            var options = {
            colors: ['#D3AAE1','#D196E5','#C264E2','#BD82D1','#AC6CC2','#8F54A3'],
            backgroundColor: '#371144',
            datalessRegionColor: '#774D85',
            tooltip: { isHtml: true, textStyle: {color: '#89C5ED', fontName: 'Arial', bold: true, fontSize: 22}},
            legend: 'none'
            };

            geochart.draw(data, options);
        }   
        

