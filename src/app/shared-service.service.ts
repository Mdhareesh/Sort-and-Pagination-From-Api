import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  readonly ApiUrl = "https://raw.githubusercontent.com/millbj92/US-Zip-Codes-JSON/master/USCities.json";
  data=[
    {
      "zip_code": 501,
      "latitude": 40.922326,
      "longitude": -72.637078,
      "city": "Holtsville",
      "state": "NY",
      "county": "Suffolk"
    },
    {
      "zip_code": 544,
      "latitude": 40.922326,
      "longitude": -72.637078,
      "city": "Holtsville",
      "state": "NY",
      "county": "Suffolk"
    },
    {
      "zip_code": 601,
      "latitude": 18.165273,
      "longitude": -66.722583,
      "city": "Adjuntas",
      "state": "PR",
      "county": "Adjuntas"
    },
    {
      "zip_code": 602,
      "latitude": 18.393103,
      "longitude": -67.180953,
      "city": "Aguada",
      "state": "PR",
      "county": "Aguada"
    },
    {
      "zip_code": 603,
      "latitude": 18.455913,
      "longitude": -67.14578,
      "city": "Aguadilla",
      "state": "PR",
      "county": "Aguadilla"
    },
    {
      "zip_code": 604,
      "latitude": 18.49352,
      "longitude": -67.135883,
      "city": "Aguadilla",
      "state": "PR",
      "county": "Aguadilla"
    },
    {
      "zip_code": 605,
      "latitude": 18.465162,
      "longitude": -67.141486,
      "city": "Aguadilla",
      "state": "PR",
      "county": "Aguadilla"
    },
    {
      "zip_code": 606,
      "latitude": 18.172947,
      "longitude": -66.944111,
      "city": "Maricao",
      "state": "PR",
      "county": "Maricao"
    },
    {
      "zip_code": 610,
      "latitude": 18.288685,
      "longitude": -67.139696,
      "city": "Anasco",
      "state": "PR",
      "county": "Anasco"
    },
    {
      "zip_code": 611,
      "latitude": 18.279531,
      "longitude": -66.80217,
      "city": "Angeles",
      "state": "PR",
      "county": "Utuado"
    },
    {
      "zip_code": 612,
      "latitude": 18.450674,
      "longitude": -66.698262,
      "city": "Arecibo",
      "state": "PR",
      "county": "Arecibo"
    },
    {
      "zip_code": 613,
      "latitude": 18.458093,
      "longitude": -66.732732,
      "city": "Arecibo",
      "state": "PR",
      "county": "Arecibo"
    },
    {
      "zip_code": 614,
      "latitude": 18.429675,
      "longitude": -66.674506,
      "city": "Arecibo",
      "state": "PR",
      "county": "Arecibo"
    },
    {
      "zip_code": 616,
      "latitude": 18.444792,
      "longitude": -66.640678,
      "city": "Bajadero",
      "state": "PR",
      "county": "Arecibo"
    },
    {
      "zip_code": 617,
      "latitude": 18.447092,
      "longitude": -66.544255,
      "city": "Barceloneta",
      "state": "PR",
      "county": "Barceloneta"
    },
    {
      "zip_code": 622,
      "latitude": 17.998531,
      "longitude": -67.187318,
      "city": "Boqueron",
      "state": "PR",
      "county": "Cabo Rojo"
    },
    {
      "zip_code": 623,
      "latitude": 18.062201,
      "longitude": -67.149541,
      "city": "Cabo Rojo",
      "state": "PR",
      "county": "Cabo Rojo"
    },
    {
      "zip_code": 624,
      "latitude": 18.023535,
      "longitude": -66.726156,
      "city": "Penuelas",
      "state": "PR",
      "county": "Penuelas"
    },
    {
      "zip_code": 627,
      "latitude": 18.477891,
      "longitude": -66.85477,
      "city": "Camuy",
      "state": "PR",
      "county": "Camuy"
    },
    {
      "zip_code": 631,
      "latitude": 18.269187,
      "longitude": -66.864993,
      "city": "Castaner",
      "state": "PR",
      "county": "Lares"
    },
    {
      "zip_code": 636,
      "latitude": 18.113284,
      "longitude": -67.039706,
      "city": "Rosario",
      "state": "PR",
      "county": "San German"
    },
    {
      "zip_code": 637,
      "latitude": 18.087322,
      "longitude": -66.934911,
      "city": "Sabana Grande",
      "state": "PR",
      "county": "Sabana Grande"
    },
    {
      "zip_code": 638,
      "latitude": 18.33616,
      "longitude": -66.472087,
      "city": "Ciales",
      "state": "PR",
      "county": "Ciales"
    },
    {
      "zip_code": 641,
      "latitude": 18.250027,
      "longitude": -66.698957,
      "city": "Utuado",
      "state": "PR",
      "county": "Utuado"
    },
    {
      "zip_code": 646,
      "latitude": 18.43606,
      "longitude": -66.281954,
      "city": "Dorado",
      "state": "PR",
      "county": "Dorado"
    },
    {
      "zip_code": 647,
      "latitude": 17.969594,
      "longitude": -66.939754,
      "city": "Ensenada",
      "state": "PR",
      "county": "Guanica"
    },
    {
      "zip_code": 650,
      "latitude": 18.360125,
      "longitude": -66.562311,
      "city": "Florida",
      "state": "PR",
      "county": "Florida"
    },
    {
      "zip_code": 652,
      "latitude": 18.457254,
      "longitude": -66.603358,
      "city": "Garrochales",
      "state": "PR",
      "county": "Arecibo"
    },
    {
      "zip_code": 653,
      "latitude": 17.972468,
      "longitude": -66.898661,
      "city": "Guanica",
      "state": "PR",
      "county": "Guanica"
    },
    {
      "zip_code": 656,
      "latitude": 18.02328,
      "longitude": -66.786909,
      "city": "Guayanilla",
      "state": "PR",
      "county": "Guayanilla"
    },
    {
      "zip_code": 659,
      "latitude": 18.481391,
      "longitude": -66.808696,
      "city": "Hatillo",
      "state": "PR",
      "county": "Hatillo"
    },
    {
      "zip_code": 660,
      "latitude": 18.145486,
      "longitude": -67.135323,
      "city": "Hormigueros",
      "state": "PR",
      "county": "Hormigueros"
    },
    {
      "zip_code": 662,
      "latitude": 18.480285,
      "longitude": -67.028155,
      "city": "Isabela",
      "state": "PR",
      "county": "Isabela"
    },
    {
      "zip_code": 664,
      "latitude": 18.217606,
      "longitude": -66.598306,
      "city": "Jayuya",
      "state": "PR",
      "county": "Jayuya"
    },
    {
      "zip_code": 667,
      "latitude": 18.015099,
      "longitude": -67.055973,
      "city": "Lajas",
      "state": "PR",
      "county": "Lajas"
    },
    {
      "zip_code": 669,
      "latitude": 18.295952,
      "longitude": -66.881925,
      "city": "Lares",
      "state": "PR",
      "county": "Lares"
    },
    {
      "zip_code": 670,
      "latitude": 18.252135,
      "longitude": -66.990967,
      "city": "Las Marias",
      "state": "PR",
      "county": "Las Marias"
    },
    {
      "zip_code": 674,
      "latitude": 18.44553,
      "longitude": -66.490268,
      "city": "Manati",
      "state": "PR",
      "county": "Manati"
    },
    {
      "zip_code": 676,
      "latitude": 18.383727,
      "longitude": -67.080799,
      "city": "Moca",
      "state": "PR",
      "county": "Moca"
    },
    {
      "zip_code": 677,
      "latitude": 18.335781,
      "longitude": -67.252547,
      "city": "Rincon",
      "state": "PR",
      "county": "Rincon"
    },
    {
      "zip_code": 678,
      "latitude": 18.45303,
      "longitude": -66.933689,
      "city": "Quebradillas",
      "state": "PR",
      "county": "Quebradillas"
    },
    {
      "zip_code": 680,
      "latitude": 18.219023,
      "longitude": -67.508068,
      "city": "Mayaguez",
      "state": "PR",
      "county": "Mayaguez"
    },
    {
      "zip_code": 681,
      "latitude": 18.219023,
      "longitude": -67.508068,
      "city": "Mayaguez",
      "state": "PR",
      "county": "Mayaguez"
    },
    {
      "zip_code": 682,
      "latitude": 18.219023,
      "longitude": -67.508068,
      "city": "Mayaguez",
      "state": "PR",
      "county": "Mayaguez"
    },
    {
      "zip_code": 683,
      "latitude": 18.113284,
      "longitude": -67.039706,
      "city": "San German",
      "state": "PR",
      "county": "San German"
    },
    {
      "zip_code": 685,
      "latitude": 18.3236,
      "longitude": -66.972227,
      "city": "San Sebastian",
      "state": "PR",
      "county": "San Sebastian"
    },
    {
      "zip_code": 687,
      "latitude": 18.316976,
      "longitude": -66.415207,
      "city": "Morovis",
      "state": "PR",
      "county": "Morovis"
    },
    {
      "zip_code": 688,
      "latitude": 18.429675,
      "longitude": -66.674506,
      "city": "Sabana Hoyos",
      "state": "PR",
      "county": "Arecibo"
    },
    {
      "zip_code": 690,
      "latitude": 18.476196,
      "longitude": -67.139597,
      "city": "San Antonio",
      "state": "PR",
      "county": "Aguadilla"
    },
    {
      "zip_code": 692,
      "latitude": 18.435818,
      "longitude": -66.338523,
      "city": "Vega Alta",
      "state": "PR",
      "county": "Vega Alta"
    },
    {
      "zip_code": 693,
      "latitude": 18.443109,
      "longitude": -66.398302,
      "city": "Vega Baja",
      "state": "PR",
      "county": "Vega Baja"
    },
    {
      "zip_code": 694,
      "latitude": 18.443109,
      "longitude": -66.398302,
      "city": "Vega Baja",
      "state": "PR",
      "county": "Vega Baja"
    },
    {
      "zip_code": 698,
      "latitude": 18.06104,
      "longitude": -66.861164,
      "city": "Yauco",
      "state": "PR",
      "county": "Yauco"
    },
    {
      "zip_code": 703,
      "latitude": 18.250398,
      "longitude": -66.12845,
      "city": "Aguas Buenas",
      "state": "PR",
      "county": "Aguas Buenas"
    },
    {
      "zip_code": 704,
      "latitude": 17.99229,
      "longitude": -66.139253,
      "city": "Aguirre",
      "state": "PR",
      "county": "Guayama"
    },
    {
      "zip_code": 705,
      "latitude": 18.128092,
      "longitude": -66.268717,
      "city": "Aibonito",
      "state": "PR",
      "county": "Aibonito"
    },
    {
      "zip_code": 707,
      "latitude": 18.007014,
      "longitude": -65.898719,
      "city": "Maunabo",
      "state": "PR",
      "county": "Maunabo"
    },
    {
      "zip_code": 714,
      "latitude": 17.96751,
      "longitude": -66.04138,
      "city": "Arroyo",
      "state": "PR",
      "county": "Arroyo"
    },
    {
      "zip_code": 715,
      "latitude": 18.011854,
      "longitude": -66.563721,
      "city": "Mercedita",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 716,
      "latitude": 18.001995,
      "longitude": -66.607429,
      "city": "Ponce",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 717,
      "latitude": 18.001995,
      "longitude": -66.607429,
      "city": "Ponce",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 718,
      "latitude": 18.22139,
      "longitude": -65.77831,
      "city": "Naguabo",
      "state": "PR",
      "county": "Naguabo"
    },
    {
      "zip_code": 719,
      "latitude": 18.298017,
      "longitude": -66.229751,
      "city": "Naranjito",
      "state": "PR",
      "county": "Naranjito"
    },
    {
      "zip_code": 720,
      "latitude": 18.226862,
      "longitude": -66.39402,
      "city": "Orocovis",
      "state": "PR",
      "county": "Orocovis"
    },
    {
      "zip_code": 721,
      "latitude": 18.364161,
      "longitude": -65.778288,
      "city": "Palmer",
      "state": "PR",
      "county": "Rio Grande"
    },
    {
      "zip_code": 723,
      "latitude": 18.009994,
      "longitude": -66.010572,
      "city": "Patillas",
      "state": "PR",
      "county": "Patillas"
    },
    {
      "zip_code": 725,
      "latitude": 18.212965,
      "longitude": -66.058033,
      "city": "Caguas",
      "state": "PR",
      "county": "Caguas"
    },
    {
      "zip_code": 726,
      "latitude": 18.212965,
      "longitude": -66.058033,
      "city": "Caguas",
      "state": "PR",
      "county": "Caguas"
    },
    {
      "zip_code": 727,
      "latitude": 18.212965,
      "longitude": -66.058033,
      "city": "Caguas",
      "state": "PR",
      "county": "Caguas"
    },
    {
      "zip_code": 728,
      "latitude": 18.001995,
      "longitude": -66.607429,
      "city": "Ponce",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 729,
      "latitude": 18.333093,
      "longitude": -65.883864,
      "city": "Canovanas",
      "state": "PR",
      "county": "Canovanas"
    },
    {
      "zip_code": 730,
      "latitude": 18.001995,
      "longitude": -66.607429,
      "city": "Ponce",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 731,
      "latitude": 18.03831,
      "longitude": -66.626344,
      "city": "Ponce",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 732,
      "latitude": 18.021781,
      "longitude": -66.613742,
      "city": "Ponce",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 733,
      "latitude": 18.019331,
      "longitude": -66.619165,
      "city": "Ponce",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 734,
      "latitude": 17.999499,
      "longitude": -66.643934,
      "city": "Ponce",
      "state": "PR",
      "county": "Ponce"
    },
    {
      "zip_code": 735,
      "latitude": 18.264872,
      "longitude": -65.594769,
      "city": "Ceiba",
      "state": "PR",
      "county": "Ceiba"
    },
    {
      "zip_code": 736,
      "latitude": 18.102967,
      "longitude": -66.139274,
      "city": "Cayey",
      "state": "PR",
      "county": "Cayey"
    },
    {
      "zip_code": 737,
      "latitude": 18.102967,
      "longitude": -66.139274,
      "city": "Cayey",
      "state": "PR",
      "county": "Cayey"
    },
    {
      "zip_code": 738,
      "latitude": 18.359381,
      "longitude": -65.611361,
      "city": "Fajardo",
      "state": "PR",
      "county": "Fajardo"
    },
    {
      "zip_code": 739,
      "latitude": 18.181469,
      "longitude": -66.169519,
      "city": "Cidra",
      "state": "PR",
      "county": "Cidra"
    },
    {
      "zip_code": 740,
      "latitude": 18.331958,
      "longitude": -65.63878,
      "city": "Puerto Real",
      "state": "PR",
      "county": "Fajardo"
    },
    {
      "zip_code": 741,
      "latitude": 18.162156,
      "longitude": -65.753485,
      "city": "Punta Santiago",
      "state": "PR",
      "county": "Humacao"
    },
    {
      "zip_code": 742,
      "latitude": 18.264872,
      "longitude": -65.594769,
      "city": "Roosevelt Roads",
      "state": "PR",
      "county": "Ceiba"
    }]
  constructor(
    private http:HttpClient
  ) { }

  getFewData(){
    return this.data;
  }
  getData():Observable<any[]>{

    return this.http.get<any>(this.ApiUrl);
  }
}
