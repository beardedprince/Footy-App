function listing() {
    return $.ajax({
        headers: {
            'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
        },
        url: 'https://api.football-data.org/v2/competitions/',
        datatype: 'jsonp',
        success: function (req) {
            console.log(req)
            $.each(req.competitions, function (i, list) {
                //console.log(i + "" + list);
                $(".comp").append(` 
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4 my-2  py-4 px-4 shadow rounded-sm" data-aos="fade-down">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> ${list.name}</h5>
                     
          </div>
        </div>
               
          </div>
                `)
            })
        },
        // headers:('Access-Control-Allow-Origin : *'),


        error: function () {
            $('footer').append(`
            <div class = alert alert-danger> Error getting data </div>
            `)
        }
    });
}

function pl() {
    return $.ajax({
        headers: {
            'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
        },
        url: 'https://api.football-data.org/v2/competitions/2021/standings',
        datatype: 'jsonp',
        success: function (req) {
            console.log(req)
            $.each(req.standings[0].table, function (i, result) {
                //console.log(i + "" + result);
                $(".pl-table").append(` 
                         
          <tbody>
            <tr>
              <th scope="row">${result.position}</th>
              <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
              <td>${result.playedGames}</td>
              <td> ${result.won} </td>
              <td>${result.draw}</td>
              <td>${result.lost}</td>
              <td>${result.goalsFor}</td>
              <td>${result.goalsAgainst}</td>
              <td>${result.points}</td>
            </tr>
          </tbody>
        
                `)
            })
        },
        // headers:('Access-Control-Allow-Origin : *'),


        error: function () {
            $('footer').append(`
            <div class = alert alert-danger> Error getting data </div>
            `)
        }
    });
}


function laLiga() {
    return $.ajax({
        headers: {
            'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
        },
        url: 'https://api.football-data.org/v2/competitions/2014/standings',
        datatype: 'jsonp',
        success: function (req) {
            console.log(req)
            $.each(req.standings[0].table, function (i, result) {
                //console.log(i + "" + result);
                $(".liga-table").append(` 
                         
          <tbody>
            <tr>
              <th scope="row">${result.position}</th>
              <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
              <td>${result.playedGames}</td>
              <td> ${result.won} </td>
              <td>${result.draw}</td>
              <td>${result.lost}</td>
              <td>${result.goalsFor}</td>
              <td>${result.goalsAgainst}</td>
              <td>${result.points}</td>
            </tr>
          </tbody>
        
                `)
            })
        },
        // headers:('Access-Control-Allow-Origin : *'),


        error: function () {
            $('footer').append(`
            <div class = alert alert-danger> Error getting data </div>
            `)
        }
    });
}


function bundesliga() {
    return $.ajax({
        headers: {
            'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
        },
        url: 'https://api.football-data.org/v2/competitions/2002/standings',
        datatype: 'jsonp',
        success: function (req) {
            console.log(req)
            $.each(req.standings[0].table, function (i, result) {
                //console.log(i + "" + result);
                $(".bl-table").append(` 
                         
          <tbody>
            <tr>
              <th scope="row">${result.position}</th>
              <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
              <td>${result.playedGames}</td>
              <td> ${result.won} </td>
              <td>${result.draw}</td>
              <td>${result.lost}</td>
              <td>${result.goalsFor}</td>
              <td>${result.goalsAgainst}</td>
              <td>${result.points}</td>
            </tr>
          </tbody>
        
                `)
            })
        },
        // headers:('Access-Control-Allow-Origin : *'),


        error: function () {
            $('footer').append(`
            <div class = alert alert-danger> Error getting data </div>
            `)
        }
    });
}

function seriaA() {
    return $.ajax({
        headers: {
            'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
        },
        url: 'https://api.football-data.org/v2/competitions/2019/standings',
        datatype: 'jsonp',
        success: function (req) {
            console.log(req)
            $.each(req.standings[0].table, function (i, result) {
                //console.log(i + "" + result);
                $(".sa-table").append(` 
                         
          <tbody>
            <tr>
              <th scope="row">${result.position}</th>
              <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
              <td>${result.playedGames}</td>
              <td> ${result.won} </td>
              <td>${result.draw}</td>
              <td>${result.lost}</td>
              <td>${result.goalsFor}</td>
              <td>${result.goalsAgainst}</td>
              <td>${result.points}</td>
            </tr>
          </tbody>
        
                `)
            })
        },
        // headers:('Access-Control-Allow-Origin : *'),


        error: function () {
            $('footer').append(`
            <div class = alert alert-danger> Error getting data </div>
            `)
        }
    });
}

function ligue1() {
    return $.ajax({
        headers: {
            'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
        },
        url: 'https://api.football-data.org/v2/competitions/2015/standings',
        datatype: 'jsonp',
        success: function (req) {
            console.log(req)
            $.each(req.standings[0].table, function (i, result) {
                //console.log(i + "" + result);
                $(".lg-table").append(` 
                         
          <tbody>
            <tr>
              <th scope="row">${result.position}</th>
              <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
              <td>${result.playedGames}</td>
              <td> ${result.won} </td>
              <td>${result.draw}</td>
              <td>${result.lost}</td>
              <td>${result.goalsFor}</td>
              <td>${result.goalsAgainst}</td>
              <td>${result.points}</td>
            </tr>
          </tbody>
        
                `)
            })
        },
        // headers:('Access-Control-Allow-Origin : *'),


        error: function () {
            $('footer').append(`
            <div class = alert alert-danger> Error getting data </div>
            `)
        }
    });
}



$(document).ready(function () {

    listing();

    // ============================== Start English PL data ===================================
    pl();

    $('.away').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2021/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[2].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".pl-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    });

    $('.home').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2021/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[1].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".pl-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    })

    $('.fixtures').click(function () {
        $('table').remove()

        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/PL/matches?matchday=13',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.matches, function (i, match) {
                    //console.log(i + "" + result);
                    var time = match.utcDate;
                    var convertTime = new Date(time);
                    var getTime = convertTime.toLocaleString().replace(/GMT.*/g, "");

                    $(".row").append(` 
    
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4 my-2  py-4 px-4 match" data-aos="fade-down">
                    <p class = "bg-info rounded text-center text-default" > Match Day : ${match.matchday}</p>
                    <div class="match-holder d-flex">
                            <div class= " home-row w-100">
                                <p > ${match.homeTeam.name}</p>
                                <p > ${match.awayTeam.name}</p>
                                
                            </div>
                            <div class= "date-time-row align-self-center pl-1 ml-5">
                                <p class="card-title"> ${getTime}</p>
                            </div>
                        </div>

                        
                    </div>
                   
                    
                    
                             
              
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });
    })

    // ============================== End English PL data ===================================



    // ============================== Bundesliga  data ===================================
    bundesliga();

    $('.bl-away').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2002/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[2].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".bl-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    });

    $('.bl-home').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2002/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[1].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".bl-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    })

    $('.bl-fixtures').click(function () {
        $('table').remove()

        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/BL1/matches?matchday=13',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.matches, function (i, match) {
                    //console.log(i + "" + result);
                    var time = match.utcDate;
                    var convertTime = new Date(time);
                    var getTime = convertTime.toLocaleString().replace(/GMT.*/g, "");

                    $(".row").append(` 
    
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4 my-2  py-4 px-4 match" data-aos="fade-down">
                    <p class = "bg-info rounded text-center text-default" > Match Day : ${match.matchday}</p>
                    <div class="match-holder d-flex">
                            <div class= " home-row w-100">
                                <p > ${match.homeTeam.name}</p>
                                <p > ${match.awayTeam.name}</p>
                                
                            </div>
                            <div class= "date-time-row align-self-center pl-1 ml-5">
                                <p class="card-title"> ${getTime}</p>
                            </div>
                        </div>

                        
                    </div>
                   
                    
                    
                             
              
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });
    })

    // ============================== end Bundesliga data ===================================


    // ============================== Serie A  data ===================================
    seriaA();

    $('.sa-away').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2019/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[2].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".sa-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    });

    $('.sa-home').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2019/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[1].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".sa-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    })

    $('.sa-fixtures').click(function () {
        $('table').remove()

        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/SA/matches?matchday=13',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.matches, function (i, match) {
                    //console.log(i + "" + result);
                    var time = match.utcDate;
                    var convertTime = new Date(time);
                    var getTime = convertTime.toLocaleString().replace(/GMT.*/g, "");

                    $(".row").append(` 
    
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4 my-2  py-4 px-4 match" data-aos="fade-down">
                    <p class = "bg-info rounded text-center text-default" > Match Day : ${match.matchday}</p>
                    <div class="match-holder d-flex">
                            <div class= " home-row w-100">
                                <p > ${match.homeTeam.name}</p>
                                <p > ${match.awayTeam.name}</p>
                                
                            </div>
                            <div class= "date-time-row align-self-center pl-1 ml-5">
                                <p class="card-title"> ${getTime}</p>
                            </div>
                        </div>

                        
                    </div>
                   
                    
                    
                             
              
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });
    })

    // ============================== end Serie A  data ===================================


    // ============================== Ligue 1 data ===================================

    ligue1();

    $('.lg-away').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2015/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[2].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".lg-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    });

    $('.lg-home').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2015/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[1].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".lg-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    })

    $('.lg-fixtures').click(function () {
        $('table').remove()

        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/FL1/matches?matchday=13',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.matches, function (i, match) {
                    //console.log(i + "" + result);
                    var time = match.utcDate;
                    var convertTime = new Date(time);
                    var getTime = convertTime.toLocaleString().replace(/GMT.*/g, "");

                    $(".row").append(` 
    
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4 my-2  py-4 px-4 match" data-aos="fade-down">
                    <p class = "bg-info rounded text-center text-default" > Match Day : ${match.matchday}</p>
                    <div class="match-holder d-flex">
                            <div class= " home-row w-100">
                                <p > ${match.homeTeam.name}</p>
                                <p > ${match.awayTeam.name}</p>
                                
                            </div>
                            <div class= "date-time-row align-self-center pl-1 ml-5">
                                <p class="card-title"> ${getTime}</p>
                            </div>
                        </div>

                        
                    </div>
                   
                    
                    
                             
              
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });
    })

    // ============================== end Ligue 1 data ===================================


    // ============================== Start La Liga data ===================================

    laLiga();

    $('.liga-away').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2014/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[2].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".liga-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    });

    $('.liga-home').click(function () {
        $('tbody').remove()
        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/2014/standings',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.standings[1].table, function (i, result) {
                    // console.log(i + "" + result);
                    $(".lg-table").append(` 
                             
              <tbody>
                <tr>
                  <th scope="row">${result.position}</th>
                  <td> <img src= ${result.team.crestUrl}> ${result.team.name}</td>
                  <td>${result.playedGames}</td>
                  <td> ${result.won} </td>
                  <td>${result.draw}</td>
                  <td>${result.lost}</td>
                  <td>${result.goalsFor}</td>
                  <td>${result.goalsAgainst}</td>
                  <td>${result.points}</td>
                </tr>
              </tbody>
            
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });

    })

    $('.liga-fixtures').click(function () {
        $('table').remove()

        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/PD/matches?matchday=13',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.matches, function (i, match) {
                    //console.log(i + "" + result);
                    var time = match.utcDate;
                    var convertTime = new Date(time);
                    var getTime = convertTime.toLocaleString().replace(/GMT.*/g, "");

                    $(".row").append(` 
    
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4 my-2  py-4 px-4 match" data-aos="fade-down">
                    <p class = "bg-info rounded text-center text-default" > Match Day : ${match.matchday}</p>
                    <div class="match-holder d-flex">
                            <div class= " home-row w-100">
                                <p > ${match.homeTeam.name}</p>
                                <p > ${match.awayTeam.name}</p>
                                
                            </div>
                            <div class= "date-time-row align-self-center pl-1 ml-5">
                                <p class="card-title"> ${getTime}</p>
                            </div>
                        </div>

                        
                    </div>
                   
                    
                    
                             
              
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });
    })

    // ============================== end La Liga data ===================================


    // =============================== Start CL data

    $('.cl-fixtures').click(function () {
        $('table').remove()

        $.ajax({
            headers: {
                'X-Auth-Token': '34dc8174922a4961bccd48cb93aee1c1'
            },
            url: 'https://api.football-data.org/v2/competitions/CL/matches',
            datatype: 'jsonp',
            success: function (req) {
                console.log(req)
                $.each(req.matches, function (i, match) {
                    //console.log(i + "" + result);
                    var time = match.utcDate;
                    var convertTime = new Date(time);
                    var getTime = convertTime.toLocaleString().replace(/GMT.*/g, "");
                    $(".row").append(` 
    
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4 my-2  py-4 px-4 match" data-aos="fade-down">
                        <div class="match-holder d-flex">
                        <p class = "bg-info"> ${match.matchday}</p>
                            <div class= " home-row w-100">

                                <p > ${match.homeTeam.name}</p>
                                <p > ${match.awayTeam.name}</p>
                                
                            </div>
                            <div class= "date-time-row align-self-center pl-1 ml-5">
                                <p class="card-title"> ${getTime}</p>
                            </div>
                        </div>

                        
                    </div>
                   
                    
                    
                             
              
                    `)
                })
            },
            // headers:('Access-Control-Allow-Origin : *'),


            error: function () {
                $('footer').append(`
                <div class = alert alert-danger> Error getting data </div>
                `)
            }
        });
    })

    // ================= End CL liga Data =================================

    $(function () {
        $("#tabs").tabs();
    });


    AOS.init();
});