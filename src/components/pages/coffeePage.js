import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';
import Error from '../error';
import Header from '../header';
import CoffeeItem from './coffeeItem';
import CoffeeServices from '../../services/coffeeServices';
import SearchPanel from '../searchPanel';
import FilterPanel from '../filterPanel';
import './coffeepage.sass';

export default class CoffeePage extends Component{

    constructor (props) {
        super(props);
        this.state = {
            data : [],
            term: '',
            filter: '',
            loading: true,
            error: false,
            errorMessage: false
        }
        this.onUpdateSerach = this.onUpdateSerach.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    };

    componentDidCatch(){
        this.setState({
            errorMessage:true
        });
    }

    filterPost(items, filter) {
        if (filter) {
            return items.filter(item => item.country === filter)
        } else {
            return items;
        }
    }

    async componentDidMount() {
        const coffeeServices = new CoffeeServices ();
        await coffeeServices.getAllCoffee()
            .then((data)  => {   
                this.setState({
                    data,
                    loading:false,
                    error: false
                })
            })
            .catch((data)  => {   
                this.setState({
                    data,
                    loading:false,
                    error: true
                })
            })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter( (item) => {
            return item.name.toLowerCase().indexOf(term) > -1
        });
    }

    onUpdateSerach(term){
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {

        if (this.state.errorMessage){
            return <Error/>
        }

        const {data, term, filter, loading, error} = this.state;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <>
                <div className="banner">
                    <Container>
                        <Header/>
                        <h1 className="title-big">Our Coffee</h1>
                    </Container>
                </div>
                <div className="shop">
                    <Container>
                        <Row>
                            <Col lg={{ size: 4, offset: 2 }}>
                                <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl"></img>
                            </Col>
                            <Col lg="4">
                                <div className="title">About our beans</div>
                                <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"></img>
                                <div className="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br></br><br></br>
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br></br>
                                    so questions. <br></br>
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br></br>
                                    is song that held help face.
                                </div>
                            </Col>
                        </Row>
                        <div className="line"></div>
                        <Row>
                            <Col lg={{ size: 4, offset: 2 }}>
                                <SearchPanel
                                    onUpdateSerach={this.onUpdateSerach}/>
                            </Col>
                            <Col lg="4">
                                <div className="shop__filter">
                                    <div className="shop__filter-label">
                                        Or filter
                                    </div>
                                    <FilterPanel
                                        filter={filter}
                                        onFilterSelect={this.onFilterSelect}/>
                                </div>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col lg={{ size: 10, offset: 1 }}>
                                <CoffeeItem 
                                props={visiblePosts}
                                loading={loading}
                                error={error}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
} 





