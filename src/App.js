import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import  Box  from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import  Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}



const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor:"#fff"
  },
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  root2: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  hero:{
    backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1591117752671-541f3495dc93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
    height:"500px",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero2:{
    backgroundImage:"url('https://s3.thingpic.com/images/DG/GDSSxEks7BiLrkYPJBCnQLXY.png')",
    height:"650px",
    
    objectFit:"contain",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero3:{
    backgroundImage:"url('https://s3-eu-west-1.amazonaws.com/s2.thingpic.com/images/Ak/AHZd6Gvzpsh5vFZtDeTbDH5a.png')",
    height:"610px",
    
    objectFit:"contain",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero4:{
    backgroundImage:"url('https://www.efe.name.tr/wp-content/uploads/2018/09/marmara-bolgesinin-illeri-haritasi.jpg')",
    height:"610px",
    
    objectFit:"contain",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero5:{
    backgroundImage:"url('https://slideplayer.biz.tr/slide/2800086/10/images/2/KARADEN%C4%B0Z+B%C3%96LGES%C4%B0.jpg')",
    height:"500px",
    
    objectFit:"contain",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero6:{
    backgroundImage:"url('http://www.forumatmosfer.com/images/netpen/ikon/52.png')",
    height:"610px",
    
    objectFit:"contain",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero7:{
    backgroundImage:"url('https://pbs.twimg.com/media/EBIRfxMX4AUUVxA.jpg')",
    height:"500px",
    
    objectFit:"contain",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero8:{
    backgroundImage:"url('https://upload.wikimedia.org/wikipedia/commons/b/b5/Turkey_Eanatolia_region.png')",
    height:"500px",
    
    objectFit:"contain",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero9:{
    backgroundImage:"url('https://asyaoral.files.wordpress.com/2013/05/akdeniz-e1367405671806.png')",
    height:"400px",
    
    objectFit:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"block",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  hero10:{
    backgroundImage:"url('https://www.hayalkatibi.com/image/cache/catalog/odev/guneydogu_anadolu_bolgesi_haritasi2-20130309-213000-800x800.jpg')",
    height:"500px",
    
    objectFit:"contain",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize:"4em",
  },
  

  media: {
    height: 300,
  },
  blogsContainer:{
    paddingTop:theme.spacing(3)
  },
  blogsTitle:{
    fontWeight:500,
    paddingBottom:theme.spacing(3)
  }
}));



export default function ButtonAppBar() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          
            <Grid container justify="space-between">  
              <Typography inline variant="h4" align="left" color='primary'>Türkiye'nin Bölgeleri ve İlleri</Typography>
              <Typography inline variant="h5" align="right" color='primary'>BÜŞRA BALABAN 181213002</Typography>
            </Grid>
        </Toolbar>
      </AppBar>
      

      <Box className={classes.hero}>
        <Box>
        <Typography inline variant="h4" align="left" >Türkiye'nin Coğrafi Özelliklerini Öğrenmek Artık Zor Değil ! </Typography>
        </Box>
        
      </Box>

      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Türkiye'deki Bölgeler" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Türkiye'deki İller" href="/trash" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Container maxWidth="lg" className={classes.blogsContainer}>
         
            <Box className={classes.hero2}></Box>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image='https://im0-tub-com.yandex.net/i?id=71667c4d7f19a178b88933cc51b66057&n=13'
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Marmara Bölgesi
                      </Typography>
                     
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://tr.wikipedia.org/wiki/Marmara_B%C3%B6lgesi" >
                      Detaylar
                    </Button>                   
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image='https://dic.academic.ru/pictures/wiki/files/84/Turkey_black_sea_region.png'
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Karadeniz Bölgesi
                      </Typography>
                     
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary"href="https://tr.wikipedia.org/wiki/Karadeniz_B%C3%B6lgesi">
                      Detaylar
                    </Button>                   
                  </CardActions>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image='http://www.forumatmosfer.com/images/netpen/ikon/52.png'
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Ege Bölgesi
                      </Typography>
                      
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://tr.wikipedia.org/wiki/Ege_B%C3%B6lgesi">
                      Detaylar
                    </Button>                   
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image='https://im0-tub-com.yandex.net/i?id=601c5cd8e8a5b216138a0198866848ee&n=13'
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        İç Anadolu Bölgesi
                      </Typography>
                     
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://tr.wikipedia.org/wiki/%C4%B0%C3%A7_Anadolu_B%C3%B6lgesi">
                      Detaylar
                    </Button>                   
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image='https://www.turkeyinlife.com/wp-content/uploads/2019/03/Vostochno-anatolijskoij-region-Turtsii.png'
                      
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Doğu Anadolu Bölgesi
                      </Typography>
                      
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://tr.wikipedia.org/wiki/Do%C4%9Fu_Anadolu_B%C3%B6lgesi">
                      Detaylar
                    </Button>                   
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image='https://im0-tub-com.yandex.net/i?id=2abd67111ab4ae3a7e237f607b6e4ff4&n=13'
                     
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Akdeniz Bölgesi
                      </Typography>
                      
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://tr.wikipedia.org/wiki/Akdeniz_B%C3%B6lgesi">
                      Detaylar
                    </Button>                   
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                
              <Card className={classes.root}>
                
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image='https://www.hayalkatibi.com/image/cache/catalog/odev/guneydogu_anadolu_bolgesi_haritasi2-20130309-213000-800x800.jpg'
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Güneydoğu Anadolu Bölgesi
                      </Typography>
                     
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="https://tr.wikipedia.org/wiki/G%C3%BCneydo%C4%9Fu_Anadolu_B%C3%B6lgesi">
                      Detaylar
                    </Button>                   
                  </CardActions>
                </Card>
              </Grid>
            </Grid>


        </Container>
      </TabPanel>



      <TabPanel value={value} index={1}>
        <Container maxWidth="lg" className={classes.blogsContainer}>
          
            <Box className={classes.hero3}>
          
            </Box>
            <div className={classes.root}>
              
                

                <div className={classes.root2}>
                  
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography className={classes.heading}>Marmara Bölgesi'ndeki İller</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
          <Container maxWidth="lg" className={classes.blogsContainer}  >
            <Container><Box className={classes.hero4}></Box></Container>
         
             <Grid container spacing={3} >
                
                <Card className={classes.root} >
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      İSTANBUL
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    
                    
                  </CardContent>
                  <CardActions>
                    <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/%C4%B0stanbul">DETAYLI Bilgi İçin Tıklayın</Button>
                  </CardActions>
                </Card>


                <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     EDİRNE
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/Edirne">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
                
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KIRKLARELİ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/K%C4%B1rklareli">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     TEKİRDAĞ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/Tekirda%C4%9F">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ÇANAKKALE
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/%C3%87anakkale">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KOCAELİ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/Kocaeli">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     YALOVA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/Yalova">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     SAKARYA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/Sakarya">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BİLECİK
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Bilecik">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BURSA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/Bursa">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BALIKESİR
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" href="https://tr.wikipedia.org/wiki/Bal%C4%B1kesir">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Container>
                 
               </Container>
                
              </Grid>
              
              </Container>
            </AccordionDetails>
          </Accordion>



          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Karadeniz Bölgesi'ndeki İller</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg" className={classes.blogsContainer}  >
            <Container><Box className={classes.hero5}></Box></Container>
         
             <Grid container spacing={3} >
                
                <Card className={classes.root} >
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      ARTVİN
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    
                    
                  </CardContent>
                  <CardActions>
                    <Button color ="primary" size="small"
                     href="https://tr.wikipedia.org/wiki/Artvin">DETAYLI Bilgi İçin Tıklayın</Button>
                  </CardActions>
                </Card>


                <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     RİZE
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Rize">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
                
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     TRABZON
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Trabzon">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BAYBURT
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Bayburt">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     GÜMÜŞHANE
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/G%C3%BCm%C3%BC%C5%9Fhane">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     GİRESUN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                   href="https://tr.wikipedia.org/wiki/Giresun">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ORDU
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Ordu_(il)">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     TOKAT
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Tokat_(il)">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     AMASYA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Amasya">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     SAMSUN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Samsun">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     SİNOP
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://www.nkfu.com/sinop-ili-hakkinda-bilgi/">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ÇORUM
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/%C3%87orum">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KASTAMONU
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Kastamonu">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BARTIN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Bart%C4%B1n">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KARABÜK
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Karab%C3%BCk">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ZONGULDAK
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Zonguldak">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BOLU
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Bolu">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     DÜZCE
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/D%C3%BCzce">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>



               <Container>
                 
               </Container>
                
              </Grid>
              
              </Container>
            </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Ege Bölgesi'ndeki İller</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg" className={classes.blogsContainer}  >
            <Container><Box className={classes.hero6}></Box></Container>
         
             <Grid container spacing={3} >
                
                <Card className={classes.root} >
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      İZMİR
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    
                    
                  </CardContent>
                  <CardActions>
                    <Button color ="primary" size="small"
                     href="https://tr.wikipedia.org/wiki/%C4%B0zmir">DETAYLI Bilgi İçin Tıklayın</Button>
                  </CardActions>
                </Card>


                <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     MANİSA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Manisa">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
                
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KÜTAHYA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/K%C3%BCtahya">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     UŞAK
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/U%C5%9Fak">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     AYDIN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                   href="https://tr.wikipedia.org/wiki/Ayd%C4%B1n">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     DENİZLİ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Denizli">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     MUĞLA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Mu%C4%9Fla">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     AFYONKARAHİSAR
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Afyonkarahisar">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Container>
                 
               </Container>
                
              </Grid>
              
              </Container>
            </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>İç Anadolu Bölgesi'ndeki İller</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg" className={classes.blogsContainer}  >
            <Container><Box className={classes.hero7}></Box></Container>
         
             <Grid container spacing={3} >
                
                <Card className={classes.root} >
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      ANKARA
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    
                    
                  </CardContent>
                  <CardActions>
                    <Button color ="primary" size="small"
                     href="https://tr.wikipedia.org/wiki/Ankara">DETAYLI Bilgi İçin Tıklayın</Button>
                  </CardActions>
                </Card>


                <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ESKİŞEHİR
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Eski%C5%9Fehir">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
                
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ÇANKIRI
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/%C3%87ank%C4%B1r%C4%B1">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KIRIKKALE
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/K%C4%B1r%C4%B1kkale">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KIRŞEHİR
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                   href="https://tr.wikipedia.org/wiki/K%C4%B1r%C5%9Fehir">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     AKSARAY
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Aksaray">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     NEVŞEHİR
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Nev%C5%9Fehir">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KONYA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Konya">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     NİĞDE
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Ni%C4%9Fde">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KARAMAN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Karaman">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KAYSERİ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Kayseri">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     YOZGAT
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Yozgat">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     SİVAS
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Sivas">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               

               <Container>
                 
               </Container>
                
              </Grid>
              
              </Container>
            </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Doğu Anadolu Bölgesi'ndeki İller</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg" className={classes.blogsContainer}  >
            <Container><Box className={classes.hero8}></Box>
         </Container>
             <Grid container spacing={3} >
                
                <Card className={classes.root} >
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      MALATYA
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    
                    
                  </CardContent>
                  <CardActions>
                    <Button color ="primary" size="small"
                     href="https://tr.wikipedia.org/wiki/Malatya">DETAYLI Bilgi İçin Tıklayın</Button>
                  </CardActions>
                </Card>


                <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ELAZIĞ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/El%C3%A2z%C4%B1%C4%9F">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
                
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     TUNCELİ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Tunceli">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ERZİNCAN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Erzincan">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BİNGÖL
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                   href="https://tr.wikipedia.org/wiki/Bing%C3%B6l">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ERZURUM
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Erzurum">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     MUŞ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Mu%C5%9F">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BİTLİS
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Bitlis">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ARDAHAN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Ardahan">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KARS
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Kars">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     AĞRI
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/A%C4%9Fr%C4%B1">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     IĞDIR
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/I%C4%9Fd%C4%B1r">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     VAN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Van">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     HAKKARİ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Hakkâri">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>


               <Container>
                 
               </Container>
                
              </Grid>
              
              </Container>
            </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Akdeniz Bölgesi'ndeki İller</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg" className={classes.blogsContainer}  >
           <Container> <Box className={classes.hero9}></Box></Container>
         
             <Grid container spacing={3} >
                
                <Card className={classes.root} >
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      ISPARTA
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    
                    
                  </CardContent>
                  <CardActions>
                    <Button color ="primary" size="small"
                     href="https://tr.wikipedia.org/wiki/Isparta">DETAYLI Bilgi İçin Tıklayın</Button>
                  </CardActions>
                </Card>


                <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BURDUR
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Burdur">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
                
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ANTALYA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Antalya">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     MERSİN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Mersin">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ADANA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                   href="https://tr.wikipedia.org/wiki/Adana">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     KAHRAMANMARAŞ
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Karhramanmara%C5%9F">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     OSMANİYE
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Osmaniye">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     HATAY
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Hatay">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Container>
                 
               </Container>
                
              </Grid>
              
              </Container>
            </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>GüneyDoğu Anadolu Bölgesi'ndeki İller</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg" className={classes.blogsContainer}  >
            <Container><Box className={classes.hero10}></Box></Container>
         
             <Grid container spacing={3} >
                
                <Card className={classes.root} >
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      KİLİS
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      
                    </Typography>
                    
                    
                  </CardContent>
                  <CardActions>
                    <Button color ="primary" size="small"
                     href="https://tr.wikipedia.org/wiki/Kilis">DETAYLI Bilgi İçin Tıklayın</Button>
                  </CardActions>
                </Card>


                <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     GAZİANTEP
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Gaziantep">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
                
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ADIYAMAN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Ad%C4%B1yaman">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ŞANLIURFA
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/%C5%9Eanl%C4%B1urfa">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     DİYARBAKIR
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                   href="https://tr.wikipedia.org/wiki/Diyarbak%C4%B1r">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     MARDİN

                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Mardin">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     BATMAN
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                  
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small"
                    href="https://tr.wikipedia.org/wiki/Batman">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     SİİRT
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/Siirt">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>
               <Card className={classes.root}>
                 <CardContent>
                   
                   <Typography variant="h5" component="h2">
                     ŞIRNAK
                   </Typography>
                   <Typography className={classes.pos} color="textSecondary">
                     
                   </Typography>
                   
                 </CardContent>
                 <CardActions>
                   <Button color ="primary" size="small" 
                   href="https://tr.wikipedia.org/wiki/%C5%9E%C4%B1rnak">DETAYLI Bilgi İçin Tıklayın</Button>
                 </CardActions>
               </Card>

               <Container>
                 
               </Container>
                
              </Grid>
              
              </Container>
            </AccordionDetails>
      </Accordion>
                  
                  
                  
              </div>
            </div>

            
        </Container>
      </TabPanel>

      
    </div>
  );
}
