def config = [:]
config.prod = [:]
config.staging = [:]

config.reponame = 'landing' // Short repo name
config.fullrepo = 'pinnacleusorg/pinnacle.us.org' // Full repo identifier

config.prod.branch = 'master' // Name of code branch
config.prod.version = 'prod'  // Name of tag version ID (:latest, :prod)
config.prod.target = 'production' // Name of build target (in Dockerfile)
config.prod.docker = 'pinnacle-landing-prod' // Name of docker label on server

config.staging.branch = 'development' // Name of code branch
config.staging.version = 'latest'  // Name of tag version ID (:latest, :prod)
config.staging.target = 'staging' // Name of build target (in Dockerfile)
config.staging.docker = 'pinnacle-landing-dev' // Name of docker label on server

pinnaclePipeline(config) { state, tag, version, target, dockerTag ->
	//This method can be used, with state, to hook onto the base pinnacle jenkinsfile.
	println("$state $tag $version $target $dockerTag");
}
